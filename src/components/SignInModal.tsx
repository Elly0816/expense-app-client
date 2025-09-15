'use client';

import { authApi } from '@/api/auth/auth';
import { COLORS } from '@/Colors';
import { NOT_FIRST_TIME_LOGIN } from '@/constants';
import { useTheme } from '@/contexts/themeContext';
import { Button, Modal, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';

type signInModalPropsType = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const { Title } = Typography;

const SignInModal: React.FC<signInModalPropsType> = ({ handleCancel, handleOk, isModalOpen }) => {
  const [isNew, setIsNew] = useState<boolean>();
  const { theme } = useTheme();

  useEffect(() => {
    const notNew = localStorage.getItem(NOT_FIRST_TIME_LOGIN);
    if (notNew == 'true') {
      setIsNew(false);
    } else {
      setIsNew(true);
    }
  }, []);

  const styles = COLORS[theme];

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
    <Modal
      centered
      closable={false}
      title={
        <Title style={{ color: styles.textHeading }} level={2}>
          {isNew ? 'Welcome' : 'Welcome back'}
        </Title>
      }
      onOk={handleOk}
      open={isModalOpen}
      width={{
        xs: '90%',
        sm: '80%',
        md: '70%',
        lg: '60%',
        xl: '50%',
        xxl: '40%',
      }}
      onCancel={handleCancel}
      styles={{
        content: {
          backgroundColor: styles.background,
        },
        header: {
          backgroundColor: styles.background,
        },
      }}
      classNames={{
        content: 'flex flex-col',
        body: 'self-center h-3/4',
        header: 'self-center',
      }}
    >
      <Button
        style={{
          backgroundColor: styles.background,
          borderColor: styles.border,
          color: styles.textBody,
        }}
        loading={isLoading}
        onClick={handleLogin}
      >
        Sign in with Google <FaGoogle style={{ color: styles.textBody }} />
      </Button>
    </Modal>
  );
};

export default SignInModal;
