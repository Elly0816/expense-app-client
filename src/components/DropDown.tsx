/**
 * Module: src/components/DropDown.tsx
 * Purpose: Dropdown menu used in the header to expose theme toggle and auth actions.
 * Exports: default DropDown component.
 */
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { ThemeToggle } from './Theme';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';
import { LogoutButton } from './Logout';
import { AuthContextType, useAuth } from '@/contexts/authContext';

const AuthAndLogout = () => {
  const { isAuthenticated } = useAuth() as AuthContextType;

  if (isAuthenticated) {
    return <LogoutButton buttonStyle={{ width: '100%', borderRadius: 50 }} />;
  }

  return null;
};

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <ThemeToggle />,
  },
  {
    key: '2',
    label: <AuthAndLogout />,
  },
];

const MyDropDown: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Dropdown
      menu={{
        items,
        style: {
          backgroundColor: COLORS[theme].background,
          color: COLORS[theme].textBody,
        },
      }}
      //   overlayStyle={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textBody }}
    >
      <a onClick={(e) => e.preventDefault()} className="h-fit">
        <Space
          style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textHeading }}
          className="h-full"
        >
          Options
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default MyDropDown;
