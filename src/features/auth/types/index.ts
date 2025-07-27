export interface TelegramUser {
  id: number;
  telegram_id: string;
  username: string;
  balance: string;
  role: string;
  status: string;
}

export interface AuthState {
  user: TelegramUser | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (user: TelegramUser) => void;
  logout: () => void;
  clearError: () => void;
  initAuth: () => Promise<void>;
}