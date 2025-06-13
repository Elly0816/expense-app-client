'use client';
import { COLORS } from '@/Colors';
import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import { useTheme } from '@/contexts/themeContext';

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full">
      <hr style={{ borderColor: COLORS[theme].border }} />
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: COLORS[theme].background,
          color: COLORS[theme].textBody,
        }}
      >
        <p
          className="text-xs md:text-sm font-light
        "
        >
          Expense Tracker ©{new Date().getFullYear()} Created by Eleazar
        </p>
      </Footer>
    </div>
  );
};

export default App;
