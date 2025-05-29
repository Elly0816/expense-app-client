'use client';
import React from 'react';
import { Layout } from 'antd';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import Link from 'next/link';
import Title from 'antd/es/typography/Title';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import MyDropDown from './DropDown';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryExpenses } from '@/hooks/queryClient';

const { Header } = Layout;

const App: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useAuth() as AuthContextType;
  return (
    // <Layout>
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
        <Title
          style={{ marginBottom: 0, color: COLORS[theme].textHeading }}
          className="self-center"
        >
          {user && ` Hi ${user?.given_name}!`}
          <Link
            href="/"
            style={{ marginBottom: 0, color: COLORS[theme].textHeading }}
            className="text-xs md:text-lg lg:text-4xl "
          >
            {/* <h1 className="text-2xl" style={{ color: COLORS[theme].textHeading }}>
          Expense Tracker
          </h1> */}
            {/* <Title
              // className="self-center"
              style={{ marginBottom: 0, color: COLORS[theme].textHeading }}
            > */}
            {!user && 'Welcome to Expense Tracker'}
            {/* </Title> */}
          </Link>
        </Title>
        {/* <div className="demo-logo" /> */}

        <MyDropDown />
        {/* <ThemeToggle /> */}

        {/* <Menu
          //   theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: '0 1 auto',
            minWidth: 200,
            backgroundColor: COLORS[theme].background,
            color: COLORS[theme].textHeading,
            borderBottom: 2,
            borderColor: COLORS[theme].border,
          }}
        /> */}
      </Header>
    </QueryClientProvider>
  );
};

export default App;
