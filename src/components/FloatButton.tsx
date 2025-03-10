'use client';

import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { FloatButton } from 'antd';

const MyFloatButton: React.FC = () => {
  const { theme } = useTheme();

  return (
    <FloatButton
      style={{
        bottom: '80%',
        // backgroundColor: COLORS[theme].background,
        // color: COLORS[theme].textBody,
      }}
      onClick={() => {}}
    />
  );
};

export default MyFloatButton;
