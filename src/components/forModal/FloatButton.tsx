'use client';
// import { useTheme } from '@/contexts/themeContext';
import { FloatButton } from 'antd';
import { CSSProperties, ReactNode } from 'react';

type MyFloatButtonPropsType = {
  onClick: () => void;
  icon?: ReactNode;
  style?: CSSProperties;
  description?: string;
};

const MyFloatButton: React.FC<MyFloatButtonPropsType> = ({ onClick, icon, style, description }) => {
  return (
    <FloatButton
      icon={icon && icon}
      style={style && style}
      onClick={onClick}
      description={description && description}
    />
  );
};

export default MyFloatButton;
