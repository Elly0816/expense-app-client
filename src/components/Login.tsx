'use client';
import { authApi } from '@/api/auth/auth';
import { Button, Card, Flex } from 'antd';
import { CSSProperties } from 'react';

type LoginPropsType = {
  containerStyle?: CSSProperties;
  cardStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
};

export const Login: React.FC<LoginPropsType> = ({ containerStyle, cardStyle, buttonStyle }) => {
  return (
    <Flex className="justify-center" style={{ ...containerStyle }}>
      <Card
        hoverable
        style={{ width: 240, ...cardStyle }}
        // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        <Button style={{ ...buttonStyle }} onClick={authApi.loginWithGoogle}>
          Login with Google
        </Button>
      </Card>
    </Flex>
  );
};
