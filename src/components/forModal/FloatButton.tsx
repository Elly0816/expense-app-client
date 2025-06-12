'use client';
// import { useTheme } from '@/contexts/themeContext';
import { FloatButton } from 'antd';
import { CSSProperties, ReactNode } from 'react';

type MyFloatButtonPropsType = {
  onClick: () => void;
  icon?: ReactNode;
  style?: CSSProperties;
  toolTip?: string;
};

const MyFloatButton: React.FC<MyFloatButtonPropsType> = ({ onClick, icon, style, toolTip }) => {
  return (
    <FloatButton
      icon={icon && icon}
      style={style && style}
      onClick={onClick}
      tooltip={toolTip && toolTip}
    />
  );
};

export default MyFloatButton;
