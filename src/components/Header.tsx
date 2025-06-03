'use client';
import React from 'react';
import { Layout } from 'antd';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import MyDropDown from './DropDown';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryExpenses } from '@/hooks/queryClient';
import Link from 'next/link';

const { Header } = Layout;

const App: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useAuth() as AuthContextType;
  return (
    <QueryClientProvider client={queryExpenses}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: COLORS[theme].background,
          borderBottomWidth: 2,
          borderBottomColor: COLORS[theme].border,
          height: 'fit-content',
        }}
        className="text-xs md:text-lg"
      >
        <Link href="/">
          <h1
            style={{ marginBottom: 0, color: COLORS[theme].textHeading }}
            className="text-xs md:text-lg lg:text-2xl font-medium"
          >
            {user ? ` Hi ${user?.given_name}!` : 'Welcome to Expense Tracker'}
            {/* (
             <Link
               href="/"
               style={{ marginBottom: 0, color: COLORS[theme].textHeading }}
               className="text-xs md:text-lg lg:text-2xl"
             >
               </Title> 
             </Link>
           ) */}
          </h1>
        </Link>

        <MyDropDown />
      </Header>
    </QueryClientProvider>
  );
};

export default App;
