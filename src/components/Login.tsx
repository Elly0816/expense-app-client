'use client';
import { authApi } from '@/api/auth/auth';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Button, Card, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { CSSProperties, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

type LoginPropsType = {
  containerStyle?: CSSProperties;
  cardStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
};

export const Login: React.FC<LoginPropsType> = ({ containerStyle, cardStyle, buttonStyle }) => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin: () => Promise<void> = async () => {
    setIsLoading(true);
    try {
      await authApi.loginWithGoogle();
    } catch (error) {
      console.error('Login Failed: ', error);
      setIsLoading(false);
    }
  };
  return (
    <Flex
      className="justify-center h-2/5 sm:h-2/4 "
      style={{
        ...containerStyle,
      }}
    >
      <Card
        styles={{
          body: {
            color: COLORS[theme].textBody,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          },
        }}
        style={{
          backgroundColor: COLORS[theme].cardBackground,
          width: 240,
          height: '100%',
          ...cardStyle,
        }}
      >
        <Title style={{ color: COLORS[theme].textBody }} level={3}>
          Hi, Welcome
        </Title>
        <Flex className="w-full" justify="center" align="center" gap="middle">
          <div
            style={{
              height: '1px',
              width: '50%',
              backgroundColor: COLORS[theme].textBody,
              opacity: 0.5,
            }}
          />
          <Text style={{ color: COLORS[theme].textBody, width: '70%', textAlign: 'center' }}>
            Login with
          </Text>
          <div
            style={{
              height: '1px',
              width: '50%',
              backgroundColor: COLORS[theme].textBody,
              opacity: 0.5,
            }}
          />
        </Flex>
        <Button
          style={{
            color: COLORS[theme].textBody,
            ...buttonStyle,
            backgroundColor: COLORS[theme].background,
          }}
          onClick={handleLogin}
          loading={isLoading}
        >
          {!isLoading && 'Google'}
          {!isLoading && <FaGoogle />}
        </Button>
      </Card>
    </Flex>
  );
};
