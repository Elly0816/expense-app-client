'use client';
import React, { CSSProperties, ReactNode } from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import Link from 'next/link';
import { ExpenseType, GetExpenseReturnType } from '@/app/typedefs/types';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getExpenseByCategory } from '@/api/expenses/expenses';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { getTotalFromExpenses } from '@/utilities/utilities';

// const actions: React.ReactNode[] = [
//   <EditOutlined key="edit" />,
//   <SettingOutlined key="setting" />,
//   <EllipsisOutlined key="ellipsis" />,
// ];

type CategoryCardPropType = {
  title: ExpenseType['category'];
  icon?: ReactNode;
  containerStyle?: CSSProperties;
};
const App: React.FC<CategoryCardPropType> = ({ title, icon, containerStyle }) => {
  const { checkAuth } = useAuth() as AuthContextType;
  const { theme } = useTheme();
  const {
    data: totalCost,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.expensesByCategory, title],
    queryFn: async () => {
      const data = await getExpenseByCategory({ category: title });
      const totalCost = getTotalFromExpenses(data as GetExpenseReturnType);
      return totalCost;
    },
  });

  if (isError) {
    checkAuth();
  }

  return (
    <>
      {/* <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} /> */}
      <Link
        style={{ ...containerStyle }}
        href={{ pathname: `/category/${title}`, query: { name: title, theme: theme } }}
        className="w-4/5 md:w-1/3 lg:w-1/4"
      >
        <Card
          loading={isLoading}
          // actions={actions}
          style={{
            maxHeight: 96,
            backgroundColor: COLORS[theme].cardBackground,
            color: COLORS[theme].textBody,
            borderColor: COLORS[theme].border,
            borderWidth: 2,
          }}
        >
          <Card.Meta
            avatar={<div style={{ fontSize: 30 }}>{icon}</div>}
            style={{
              backgroundColor: COLORS[theme].cardBackground,
              color: COLORS[theme].textHeading,
            }}
            title={<h2 style={{ color: COLORS[theme].textHeading }}>{title}</h2>}
            description={
              <h5 style={{ color: COLORS[theme].textBody }}>{`$${
                totalCost ? totalCost.asNumber?.toFixed(2) : 0
              }`}</h5>
            }
          />
        </Card>
      </Link>
    </>
  );
};

export default App;
