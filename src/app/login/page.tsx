/**
 * Module: src/app/login/page.tsx
 * Purpose: Login page component that displays third-party login options and redirects authenticated users.
 */
'use client';
// import api from '@/api/baseUrl';
import { COLORS } from '@/Colors';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import { Login } from '@/components/Login';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { useTheme } from '@/contexts/themeContext';
import useSidebar from '@/hooks/useSidebar';
import { Flex, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LoginPage: React.FC = () => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth() as AuthContextType;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  //console.log(`The base url is: ${api.defaults.baseURL}`);
  //console.log(`The environment is: ${process.env.NODE_ENV}`);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, router]);

  return isLoading ? (
    <Flex className="justify-center items-center h-full">
      <Spin />
    </Flex>
  ) : (
    <Flex
      className="justify-center items-start h-full"
      style={{
        backgroundColor: COLORS[theme].background,
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <Flex vertical className="w-11/12 md:w-3/4 items-center justify-start h-full gap-12">
        <Hero />
        <Features />
      </Flex>
    </Flex>
  );

  // return (
  //   <Flex
  //     style={{
  //       backgroundColor: COLORS[theme].background,
  //       backgroundImage: "url('./expense.jpg')",
  //       backgroundSize: 'cover',
  //       backgroundPosition: 'center',
  //       backgroundRepeat: 'none',
  //     }}
  //     className="justify-center items-center h-full"
  //   >
  //     {element}
  //     <h1>SOmething</h1>
  //   </Flex>
  // );
};

export default LoginPage;
