/**
 * Module: src/contexts/authContext.tsx
 * Purpose: Provides authentication state and helpers (checkAuth, logout) to the app.
 * Exports: AuthProvider, useAuth, and AuthContextType.
 */
'use client';
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';
import api from '@/api/baseUrl';
import { AuthenticatedType, AuthType, user } from '@/app/typedefs/types';
import { usePathname, useRouter } from 'next/navigation';
import { AUTH_VALUE, CHECK_AUTH_INTERVAL } from '@/constants';
import { Spin, Flex } from 'antd';

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastCheck, setLastCheck] = useState<number>(0);

  const pathname = usePathname();

  const router = useRouter();

  const authValue = useMemo(
    () => ({
      isAuthenticated,
      user,
    }),
    [isAuthenticated, user]
  );

  const checkAuth = useCallback(async () => {
    const now = Date.now();

    if (now < lastCheck + CHECK_AUTH_INTERVAL && isAuthenticated) {
      return;
    }
    try {
      const data = (
        await api.get('/auth/check', {
          withCredentials: true,
        })
      ).data as AuthType;
      if (data.isAuthenticated) {
        setLastCheck(now);
        setIsLoading(false);
        setIsAuthenticated(true);
        setUser(data.user);
        //console.log('The user is: \n');
        //console.log(data.user);
        // router.push('/');
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      router.push('/login');
    }
  }, [router, isAuthenticated, lastCheck]);

  const logout = useCallback(async () => {
    try {
      const response = (await api.get('/auth/logout', {
        withCredentials: true,
      })) as { data: AuthenticatedType };

      if (!response.data.isAuthenticated) {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem(AUTH_VALUE);
        router.push('/login');
      }
    } catch (error) {
      console.error('logout failed: ', error);
    }
  }, [router]);

  // const logout: () => Promise<void> =

  useLayoutEffect(() => {
    const excludePaths = ['/login'];
    if (excludePaths.includes(pathname)) {
      setIsLoading(false);
      return;
    }
    checkAuth();
  }, [pathname, checkAuth]);

  const item = isLoading ? (
    // <div className="flex flex-row justify-center items-center h-full">
    // {/* <h2>Loading...</h2> */}
    // </div>
    <Flex className="justify-center items-center h-full">
      <Spin />
    </Flex>
  ) : (
    children
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authValue.isAuthenticated,
        user: authValue.user,
        checkAuth,
        logout,
      }}
    >
      {item}
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
