'use client';
import { getExpenseByCategory } from '@/api/expenses/expenses';
import { categories } from '@/app/typedefs/types';
import { COLORS } from '@/Colors';
import { QUERY_KEYS } from '@/constants';
import { useTheme } from '@/contexts/themeContext';
import { useQuery } from '@tanstack/react-query';
// import { COLORS } from '@/Colors';
// import { useTheme } from '@/contexts/themeContext';
import { Table } from 'antd';
import Column from 'antd/es/table/Column';
import React, { HTMLAttributes, ReactElement } from 'react';
// import ColumnGroup from 'antd/es/table/ColumnGroup';

export type CategoryItem = {
  key: React.Key;
  expense: string;
  amount: number;
  date: Date;
};

type CategoryItemPropsType = {
  items: CategoryItem[];
  category: categories;
};

const Category: React.FC<CategoryItemPropsType> = ({ items, category }) => {
  console.log(...items);
  const { theme } = useTheme();

  const { data, error, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.expensesByCategory],
    queryFn: async () => {
      const data = await getExpenseByCategory({ category });
      console.log(data);
      return data;
    },
  });

  return (
    <Table<CategoryItem>
      dataSource={items}
      className="flex flex-1 flex-col p-4"
      components={{
        header: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          cell: (props: any) => (
            <th
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
      // style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textBody }}
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
