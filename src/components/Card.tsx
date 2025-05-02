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
  const { theme } = useTheme();
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.expensesByCategory, title],
    queryFn: async () => {
      const expenses = await getExpenseByCategory({ category: title });
      const totalCost = (expenses as GetExpenseReturnType).expenses.reduce(
        (prev, curr) => prev + Number(curr.amount),
        0
      );
      return totalCost;
    },
  });

  return (
    <>
      {/* <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} /> */}
      <Link
        style={{ ...containerStyle }}
        href={{ pathname: `/category/${title}`, query: { name: title, theme: theme } }}
      >
        <Card
          // actions={actions}
          style={{
            minWidth: 300,
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
            description={<h5 style={{ color: COLORS[theme].textBody }}>{`$${data ? data : 0}`}</h5>}
          />
        </Card>
      </Link>
    </>
  );
};

export default App;
