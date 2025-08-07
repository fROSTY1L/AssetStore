import { type ReactNode, useState, useEffect, useCallback, useRef } from 'react';
import { AuthContext } from '../context';
import type { AuthState, TelegramUser } from '../types';

interface AuthProviderProps {
  children: ReactNode;
  enableFakeAuth?: boolean;
}

interface ServerResponse {
  success: boolean;
  user: {
    id: number;
    telegram_id: string;
    username: string;
    balance: string;
    role: string;
    status: string;
  };
}

export const AuthProvider = ({ 
  children,
  enableFakeAuth = false
}: AuthProviderProps) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });
  const initializedRef = useRef(false);

  const login = useCallback((user: TelegramUser) => {
    setState(prev => ({
      ...prev,
      user: {
        id: user.id,
        telegram_id: user.telegram_id,
        username: user.username,
        balance: user.balance || '0.00',
        role: user.role,
        status: user.status,
      },
      isLoading: false,
      error: null,
    }));
  }, []);

  const logout = useCallback(() => {
    setState(prev => ({
      ...prev,
      user: null,
      isLoading: false,
    }));
    initializedRef.current = false;
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const initAuth = useCallback(async () => {
    if (initializedRef.current || state.user || state.error) return;
    
    initializedRef.current = true;
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const requestPayload = enableFakeAuth
        ? {
            initData: JSON.stringify({
              user: { 
                id: "nazdarq", 
                username: 'test_user_231',
              },
              hash: 'dev_mode_hash'
            }),
            isDevMode: true
          }
        : {
            initData: window.Telegram?.WebApp?.initData || '',
            isDevMode: false
          };

      console.log('Auth request payload:', requestPayload);

      const response = await fetch('http://localhost:3000/api/auth/telegram', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestPayload),
        credentials: 'include'
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { message: await response.text() };
        }
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data: ServerResponse = await response.json();
      
      if (!data.success || !data.user) {
        throw new Error('Authentication failed');
      }

      login({
        id: data.user.id,
        telegram_id: data.user.telegram_id,
        username: data.user.username,
        balance: data.user.balance || '0.00',
        role: data.user.role,
        status: data.user.status,
      });

    } catch (error) {
      console.error('Authentication error details:', {
        error: error instanceof Error ? error.message : error,
        enableFakeAuth,
        hasTelegramWebApp: !!window.Telegram?.WebApp
      });

      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Authentication error',
      }));
      initializedRef.current = false;
    }
  }, [enableFakeAuth, login, state.user, state.error]);

  useEffect(() => {
    const init = async () => {
      try {
        await initAuth();
      } catch (error) {
        console.error('Unhandled auth error:', error);
      }
    };
    
    init();
  }, [initAuth]);

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logout,
      clearError,
      initAuth,
    }}>
      {children}
    </AuthContext.Provider>
  );
};