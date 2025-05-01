'use client';
import { getExpenseByCategory } from '@/api/expenses/expenses';
import { categories, ExpenseType, GetExpenseReturnType } from '@/app/typedefs/types';
import { COLORS } from '@/Colors';
import { QUERY_KEYS } from '@/constants';
import { useTheme } from '@/contexts/themeContext';
import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';
import Column from 'antd/es/table/Column';
import React, { HTMLAttributes, ReactElement, useState } from 'react';

export type CategoryItem = {
  key: React.Key;
  expense: string;
  amount: number;
  date: Date;
};

type CategoryItemPropsType = {
  category: categories;
};

const Category: React.FC<CategoryItemPropsType> = ({ category }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.expensesByCategory, category],
    queryFn: async () => {
      const data = await getExpenseByCategory({ category });
      console.log(data);
      setExpenses((data as GetExpenseReturnType).expenses);
      return data;
    },
  });
  const { theme } = useTheme();
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  return (
    <Table<ExpenseType>
      dataSource={expenses}
      className="flex flex-1 flex-col p-4"
      components={{
        header: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          cell: (props: any) => (
            <th
              headers={category}
              {...props}
              style={{
                backgroundColor: COLORS[theme].background,
                color: COLORS[theme].textHeading,
                borderRadius: 0,
                // display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ),
        },
        body: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          cell: (props: any) => (
            <td
              {...props}
              style={{
                backgroundColor: COLORS[theme].background,
                color: COLORS[theme].textBody,
              }}
            />
          ),
        },
      }}
      pagination={{
        style: {
          backgroundColor: COLORS[theme].background,
          color: COLORS[theme].textBody,
        },
        itemRender: (_, type, originalElement) => {
          if (
            type === 'prev' ||
            type === 'next' ||
            type === 'jump-next' ||
            type === 'jump-prev' ||
            type === 'page'
          ) {
            return React.cloneElement(
              originalElement as ReactElement,
              {
                style: {
                  color: COLORS[theme].textBody,
                  backgroundColor: COLORS[theme].background,
                },
              } as HTMLAttributes<HTMLElement>
            );
          }
        },
      }}
      loading={isLoading}
      key={((expense, index) => {
        return index;
      })()}
    >
      <Column title="Expense" dataIndex="expense" key="expense" />
      <Column
        title="Amount"
        dataIndex="amount"
        key="amount"
        render={(amount) => `$${amount.toFixed(2)}`}
      />
      <Column
        title="Date"
        dataIndex="date"
        key="date"
        render={(date) => new Date(date).toLocaleDateString()}
      />
    </Table>
  );
};

export default Category;
