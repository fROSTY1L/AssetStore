import { useAuth } from '../hooks/useAuth';
import { useEffect, type JSX } from 'react';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isLoading, initAuth } = useAuth();

  useEffect(() => {
    if (!user && !isLoading) {
      initAuth();
    }
  }, [user, isLoading, initAuth]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Не удалось авторизоваться</h2>
        <button 
          className="btn btn-primary"
          onClick={initAuth}
        >
          Попробовать снова
        </button>
      </div>
    </div>;
  }

  return children;
};

