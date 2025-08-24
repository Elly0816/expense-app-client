/**
 * Module: src/components/Logout.tsx
 * Purpose: Logout button used when the user is authenticated.
 * Exports: LogoutButton component.
 */
import { COLORS } from '@/Colors';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { useTheme } from '@/contexts/themeContext';
import { useMutation } from '@tanstack/react-query';
import { Button } from 'antd';
import { CSSProperties } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

type LogoutPropsType = {
  containerStyle?: CSSProperties;
  cardStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
};

export const LogoutButton: React.FC<LogoutPropsType> = ({ buttonStyle }) => {
  const { logout } = useAuth() as AuthContextType;
  const { mutate, isPending } = useMutation({
    mutationFn: logout,
  });

  const { theme } = useTheme();
  return (
    <Button
      style={{
        color: COLORS[theme].textBody,
        ...buttonStyle,

        backgroundColor: COLORS[theme].background,
      }}
      onClick={() => {
        mutate();
      }}
      loading={isPending}
    >
      {!isPending && 'Logout'}
      {!isPending && <FaSignOutAlt />}
    </Button>
  );
};
