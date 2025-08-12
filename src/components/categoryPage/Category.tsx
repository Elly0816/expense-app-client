'use client';
import { deleteExpense, getExpenseByCategory } from '@/api/expenses/expenses';
import { categories, ExpenseType, GetExpenseReturnType } from '@/app/typedefs/types';
import { COLORS } from '@/Colors';
import { QUERY_KEYS } from '@/constants';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { useTheme } from '@/contexts/themeContext';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, message, Table } from 'antd';
import Column from 'antd/es/table/Column';
import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { AiOutlineClose, AiOutlineBook } from 'react-icons/ai';
import { queryExpenses } from '@/contexts/queryClientProvider';

export type CategoryItem = {
  key: React.Key;
  expense: string;
  amount: number;
  date: Date;
};

type CategoryItemPropsType = {
  category: categories;
  getInfoForEdit: (id: number) => void;
};

const Category: React.FC<CategoryItemPropsType> = ({ category, getInfoForEdit }) => {
  const { checkAuth } = useAuth() as AuthContextType;
  const { theme } = useTheme();
  const [expenses, setExpenses] = useState<(ExpenseType & { key: number })[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.expensesByCategory, category],
    queryFn: async () => {
      const data = await getExpenseByCategory({ category });
      setExpenses(
        (data as GetExpenseReturnType).expenses.map((expense) => {
          return { ...expense, key: expense.id };
        })
      );
      //console.log(data);
      return data;
    },
  });

  if (isError) {
    checkAuth();
  }

  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => {
      return deleteExpense({ id });
    },
    onSuccess: () => {
      messageApi.success('Expense deleted Successfully');
      queryExpenses.invalidateQueries({ queryKey: [QUERY_KEYS.expensesByCategory, category] });
    },
  });

  return (
    <>
      {contextHolder}
      <Table<ExpenseType>
        dataSource={expenses}
        // bordered
        // style={{ top: '30%', position: 'absolute' }}
        className="overflow-x-auto pr-2 pl-2 w-full absolute top-4/12"
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
                // key={props.id}
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
          hideOnSinglePage: true,
        }}
        loading={isLoading}
        // key="id"
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
        <Column
          width={'15%'}
          title="Delete"
          key="id"
          dataIndex="id"
          render={(id) => (
            <Button
              className="w-full md:w-1/2"
              loading={isPending}
              onClick={() => {
                mutate(id);
              }}
              style={{
                // color: COLORS[theme].textBody,
                backgroundColor: '#ff1212',
                // backgroundColor: COLORS[theme].accent,
                borderRadius: '50px',
                width: 50,
                border: 0,
              }}
              title="delete this expense"
            >
              <AiOutlineClose className="text-xs md:text-base" color={COLORS[theme].textBody} />
            </Button>
          )}
        />
        <Column
          width={'15%'}
          title="Edit"
          key="id"
          dataIndex="id"
          render={(id) => (
            <Button
              className="w-full md:w-1/2"
              onClick={() => {
                getInfoForEdit(id);
              }}
              style={{
                // color: COLORS[theme].textBody,
                backgroundColor: COLORS[theme].cardBackground,
                // backgroundColor: COLORS[theme].accent,
                borderRadius: '50px',
                width: 50,
                border: 0,
              }}
              title="Edit this expense"
            >
              <AiOutlineBook className="text-xs md:text-base" color={COLORS[theme].textBody} />
            </Button>
          )}
        />
      </Table>
    </>
  );
};

export default Category;
