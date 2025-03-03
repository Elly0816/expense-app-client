'use client';
import { COLORS } from '@/Colors';
import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import { useTheme } from '@/contexts/themeContext';

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <>
      <hr style={{ borderColor: COLORS[theme].border }} />
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: COLORS[theme].background,
          color: COLORS[theme].textBody,
        }}
      >
        Expense Tracker ©{new Date().getFullYear()} Created by Eleazar
      </Footer>
    </>
  );
};

export default App;
