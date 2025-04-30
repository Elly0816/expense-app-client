'use client';
import { authApi } from '@/api/auth/auth';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Button, Card, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
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
      className="justify-center"
      style={{
        // minHeight: 'min-content',
        height: '70%',
        ...containerStyle,
        // backgroundColor: COLORS[theme].cardBackground,
        // color: COLORS[theme].textBody,
      }}
    >
      <Card
        // hoverable
        // className="flex flex-col justify-between items-center"
        styles={{
          body: {
            backgroundColor: COLORS[theme].cardBackground,
            color: COLORS[theme].textBody,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}
        style={{ width: 240, height: '100%', ...cardStyle }}
        // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Title style={{ color: COLORS[theme].textBody }} level={3}>
          Welcome back to your Expense Tracker
        </Title>
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        <Button
          style={{
            color: COLORS[theme].textBody,
            ...buttonStyle,
            backgroundColor: COLORS[theme].background,
          }}
          onClick={handleLogin}
          loading={isLoading}
        >
          {!isLoading && 'Login with Google'}
          {!isLoading && <FaGoogle />}
        </Button>
      </Card>
    </Flex>
  );
};
