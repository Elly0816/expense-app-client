'use client';
import { createContext, useContext, ReactNode, useState, useLayoutEffect } from 'react';
import api from '@/api/baseUrl';
import { user } from '@/app/typedefs/types';
import { useRouter } from 'next/navigation';

export type AuthContextType = {
  isAuthenticated: boolean;
  user: user | null;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }): ReactNode {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<user | null>(null);

  const router = useRouter();

  const checkAuth: () => Promise<void> = async () => {
    try {
      const response = await api.get('/auth/check', {
        withCredentials: true,
      });
      setIsAuthenticated(true);
      setUser(response.data.user);

      console.log('The user is: \n');
      console.log(response.data.user);
      // router.push('/');
    } catch (err) {
      console.error(err);
      setIsAuthenticated(false);
      setUser(null);
      router.push('/login');
    }
  };

  const logout: () => Promise<void> = async () => {
    try {
      await api.get('/auth/logout', {
        withCredentials: true,
      });
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('logout failed: ', error);
    }
    router.push('/login');
  };

  useLayoutEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth: () => Error | AuthContextType = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
