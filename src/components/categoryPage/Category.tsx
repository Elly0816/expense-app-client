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
      {/* <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags: string[]) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )}
      /> */}
      {/* <Column
        title="Action"
        key="action"
        render={(value: CategoryItem['expense'], record: CategoryItem) => (
          <Space size="middle">
            <a>Edit {record.expense}</a>
            <a>Delete</a>
          </Space>
        )}
      /> */}
    </Table>
  );
};

export default Category;
