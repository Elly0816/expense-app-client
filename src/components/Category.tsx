'use client';
import { Table } from 'antd';
import Column from 'antd/es/table/Column';
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
  return (
    <Table<CategoryItem> dataSource={items}>
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
