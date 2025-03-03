'use client';
import React from 'react';
import { Layout } from 'antd';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { ThemeToggle } from '@/components/Theme';

const { Header } = Layout;

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    // <Layout>
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
      }}
    >
      <h1 className="text-2xl" style={{ color: COLORS[theme].textHeading }}>
        Expense Tracker
      </h1>
      {/* <div className="demo-logo" /> */}
      <ThemeToggle />

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
    /* <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
    //   </Footer> */
    // </Layout>
  );
};

export default App;
