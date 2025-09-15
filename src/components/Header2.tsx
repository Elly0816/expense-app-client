/**
 * Module: src/components/Header2/tsx
 * Purpose: The new header component that includes the title and a dynamic MenuOptions component
 * Exports: Default Header component
 */

'use client';

import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Typography } from 'antd';
import MenuOptions from './MenuOptions';
import { AuthContextType, useAuth } from '@/contexts/authContext';

const { Title } = Typography;

const Header: React.FC = () => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth() as AuthContextType;
  return (
    <nav
      className="flex flex-row justify-between items-center px-5 py-2 sticky top-0"
      style={{ backgroundColor: COLORS[theme].background }}
    >
      <Title level={2} style={{ color: COLORS[theme].textHeading, margin: 0 }}>
        Xpense
      </Title>
      <MenuOptions isAuth={isAuthenticated} />
    </nav>
  );
};

export default Header;
