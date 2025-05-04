'use client';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Button } from 'antd';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const icon = theme === 'light' ? <AiOutlineMoon /> : <AiOutlineSun />;

  return (
    <Button
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      content="Toggle Theme"
      icon={icon}
      onClick={toggleTheme}
      style={{
        backgroundColor: COLORS[theme].background,
        color: COLORS[theme].textBody,
        borderColor: COLORS[theme].border,
        // width: '100%',
        // height: '100%',
        borderRadius: 25,
      }}
    >
      Toggle Theme
    </Button>
  );
};
