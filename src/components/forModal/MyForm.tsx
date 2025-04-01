'use client';

import { Form, Input, Button, DatePicker, Select, Space } from 'antd';
import { categories, ExpenseType } from '@/app/typedefs/types';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Typography } from 'antd';

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
};

type LabelPropsType = {
  children: string;
  theme: 'dark' | 'light';
};

const Labels: React.FC<LabelPropsType> = ({ children, theme }) => {
  return <span style={{ color: COLORS[theme].textHeading }}>{children}</span>;
};

const { Title } = Typography;

const MyForm: React.FC<FormPropsType> = ({ category }) => {
  const onFinish: () => void = () => {
    return;
  };

  const onFinishFailed: () => void = () => {
    return;
  };

  const { theme } = useTheme();

  return (
    <Form
      name="basic"
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
            dropdownRender={(menu) => {
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
