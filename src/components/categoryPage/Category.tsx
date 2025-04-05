'use client';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
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
};

const Category: React.FC<CategoryItemPropsType> = ({ items }) => {
  console.log(...items);
  const { theme } = useTheme();
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
                  // borderWidth: 2,
                  // borderColor: COLORS[theme].border,
                },
              } as HTMLAttributes<HTMLElement>
            );
          }
        },
      }}
      // style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textBody }}
    >
      {/* <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup> */}
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
