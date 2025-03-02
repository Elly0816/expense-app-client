'use client';
import React from 'react';
import { Layout } from 'antd';
import { COLORS } from '@/Colors';

const { Header } = Layout;

// const items = Array.from({ length: 3 }).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));

const App: React.FC = () => {
  //   const {
  //     token: { colorBgContainer, borderRadiusLG },
  //   } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: COLORS.background,
          borderWidth: 2,
          borderColor: COLORS.border,
        }}
      >
        <h1 className="text-2xl" style={{ color: COLORS.textHeading }}>
          Expense Tracker
        </h1>
        {/* <div className="demo-logo" /> */}
        {/* <Menu
          //   theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: '0 1 auto',
            minWidth: 200,
            backgroundColor: COLORS.background,
            color: COLORS.textHeading,
            borderBottom: 2,
            borderColor: COLORS.border,
          }}
        /> */}
      </Header>
      {/* <Content style={{ padding: '0 48px' }}>
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
      </Footer> */}
    </Layout>
  );
};

export default App;
