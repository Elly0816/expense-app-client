'use client';

import { Form, Input, Button, DatePicker, Select, message } from 'antd';
import { categories, ExpenseType } from '@/app/typedefs/types';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Typography } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { createExpense, editExpense } from '@/api/expenses/expenses';
import { QUERY_KEYS } from '@/constants';
import { useForm } from 'antd/es/form/Form';
import { AxiosError } from 'axios';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { queryExpenses } from '@/contexts/queryClientProvider';
import { useEdit } from '@/contexts/editExpenseContext';

import { useEffect } from 'react';
import dayjs from 'dayjs';
const CATEGORY_OPTIONS = [
  'Food & Drinks',
  'Groceries',
  'Shopping',
  'Transport',
  'Entertainment',
  'Utilities',
  'Health & Fitness',
  'Home',
  'Savings',
];

type FormPropsType = {
  category: categories;
  closeModal: () => void;
  showExpense: boolean;
};

type LabelPropsType = {
  children: string;
  theme: 'dark' | 'light';
};

const Labels: React.FC<LabelPropsType> = ({ children, theme }) => {
  return <span style={{ color: COLORS[theme].textHeading }}>{children}</span>;
};

const { Title } = Typography;

const MyForm: React.FC<FormPropsType> = ({ category, closeModal, showExpense }) => {
  const { theme } = useTheme();
  const { expense } = useEdit();
  // const queryClient = useQueryClient();
  const [form] = useForm<ExpenseType>();

  useEffect(() => {
    if (expense && showExpense) {
      console.log('Here is the expense');
      console.log(expense);
      form.setFieldsValue({ ...expense, date: dayjs(new Date(expense.date)) });
    } else {
      form.resetFields();
    }
  }, [form, expense, showExpense]);

  const [messageApi, contextHolder] = message.useMessage();
  const { logout } = useAuth() as AuthContextType;
  const { mutate, isPending } = useMutation({
    mutationFn: createExpense,
    onSuccess: (data) => {
      messageApi.success('Expense added successfully');
      console.log(data);
      form.resetFields();
      closeModal();
      /*
        The query to invalidate would be whatever query actually
        fetches the expenses. 

        Said query has not been implemented yet.
      */
      queryExpenses.invalidateQueries({
        queryKey: [QUERY_KEYS.expensesByCategory],
        // exact: false (This is the default behaviour)
      });
      queryExpenses.invalidateQueries({ queryKey: QUERY_KEYS.month });
    },
    onError: (error) => {
      messageApi.error('Failed to add expense');
      const resError = error as AxiosError;
      if (resError.status === 401) {
        //console.log('Logging out');
        logout();
      }
      //console.log('Error: ', error);
    },
  });

  const { mutate: editMutation, isPending: editIsPending } = useMutation({
    mutationFn: editExpense,
    onSuccess: (data) => {
      messageApi.success(`Expense edited successfully`);
      console.log(data);
      form.resetFields();
      closeModal();

      queryExpenses.invalidateQueries({
        queryKey: [QUERY_KEYS.expensesByCategory],
        // exact: false (This is the default behaviour)
      });
      queryExpenses.invalidateQueries({ queryKey: QUERY_KEYS.month });
    },

    onError: (error) => {
      messageApi.error('Failed to edit expense');
      const resError = error as AxiosError;
      if (resError.status === 401) {
        //console.log('Logging out');
        logout();
      }
      //console.log('Error: ', error);
    },
  });

  const onFinish: (values: ExpenseType) => void = (values) => {
    if (category) {
      if (showExpense) {
        console.log('Here is the value of the form from editing');
        console.log(values);
        editMutation({
          expense: {
            ...(expense as ExpenseType),
            category: category,
            expense: values.expense,
            amount: values.amount,
            date: values.date,
          },
        });
      } else {
        mutate({ expense: { ...values, category: category } });
      }
    } else {
      mutate({ expense: values });
    }
  };

  const onFinishFailed: (errorInfo: unknown) => void = (errorInfo) => {
    console.log('Failed: ', errorInfo);
  };

  // const responsiveWidth: = ''

  return (
    <>
      {contextHolder}
      <Form
        // className="w-1/2 md:w-2/3 lg:w-4/5"
        form={form}
        // name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 600,
          backgroundColor: COLORS[theme].background,
          color: COLORS[theme].textBody,
          marginTop: 50,
        }}
        initialValues={{
          remember: true,
          category: category ? category : undefined,
          // date: new Date(),
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {!category ? (
          <Form.Item<ExpenseType>
            label={<Labels theme={theme}>Category</Labels>}
            name="category"
            rules={[{ required: true, message: 'Please enter a category' }]}
          >
            {/* {!category && ( */}
            <Select
              disabled={category ? true : false}
              style={{
                backgroundColor: COLORS[theme].cardBackground,
              }}
              popupRender={(menu) => {
                return <>{menu}</>;
              }}
              options={CATEGORY_OPTIONS.map((option) => ({
                value: option,
                label: option,
              }))}
            />
            {/* )} */}
          </Form.Item>
        ) : (
          <Title
            style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textHeading }}
            level={2}
            className="ml-12"
          >
            {category}
          </Title>
        )}

        <Form.Item<ExpenseType>
          label={<Labels theme={theme}>Expenses</Labels>}
          name="expense"
          rules={[{ required: true, message: 'Please Enter the expense!' }]}
          style={{
            backgroundColor: COLORS[theme].background,
            color: COLORS[theme].textBody,
          }}
        >
          <Input
            style={{ backgroundColor: COLORS[theme].cardBackground, color: COLORS[theme].textBody }}
          />
        </Form.Item>

        <Form.Item<ExpenseType>
          name="amount"
          label={<Labels theme={theme}>Amounts</Labels>}
          rules={[
            { required: true, message: 'Enter the amount of the expense' },
            {
              pattern: /^\d*\.?\d+$/,
              message: 'Please enter a valid number (e.g., 10 or 10.50)',
            },
          ]}
          style={{
            backgroundColor: COLORS[theme].background,
            color: COLORS[theme].textBody,
          }}
        >
          <Input
            style={{ backgroundColor: COLORS[theme].cardBackground, color: COLORS[theme].textBody }}
          />
        </Form.Item>

        <Form.Item<ExpenseType>
          name="date"
          label={<Labels theme={theme}>Date</Labels>}
          rules={[{ type: 'object' as const, required: true, message: 'Please select date!' }]}
          style={{
            backgroundColor: COLORS[theme].background,
            color: COLORS[theme].textBody,
          }}
        >
          <DatePicker
            style={{ backgroundColor: COLORS[theme].cardBackground, color: COLORS[theme].textBody }}
            color={COLORS[theme].textBody}
            // defaultValue={new Date()}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            loading={showExpense ? editIsPending : isPending}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default MyForm;
