import { authApi } from '@/api/auth/auth';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Button } from 'antd';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';

type SignInButtonPropsType = {
  handleOpenModal: () => void;
};

const SignInButton: React.FC<SignInButtonPropsType> = ({ handleOpenModal }) => {
  return (
    <Button type="primary" onClick={handleOpenModal}>
      Sign In
    </Button>
  );
};

export default SignInButton;
