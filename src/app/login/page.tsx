'use client';
import api from '@/api/baseUrl';
import { COLORS } from '@/Colors';
import { Login } from '@/components/Login';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { useTheme } from '@/contexts/themeContext';
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

  const element = isLoading ? (
    // <h2>Loading...</h2>
    <Flex className="justify-center items-center h-full">
      <Spin />
    </Flex>
  ) : (
    <Login containerStyle={{ justifyContent: 'center', alignItems: 'center', opacity: 0.85 }} />
  );

  return (
    <Flex
      style={{
        backgroundColor: COLORS[theme].background,
        backgroundImage: "url('./expense.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
      }}
      className="justify-center items-center h-full"
    >
      {element}
    </Flex>
  );
};

export default LoginPage;
