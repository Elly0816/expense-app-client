'use client';
import { COLORS } from '@/Colors';
import { Login } from '@/components/Login';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { useTheme } from '@/contexts/themeContext';
import { Flex } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LoginPage: React.FC = () => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth() as AuthContextType;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, router]);

  const element = isLoading ? (
    <h2>Loading...</h2>
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
