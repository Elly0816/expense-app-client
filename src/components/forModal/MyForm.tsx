'use client';

import { Form, Input, Button, DatePicker, Select } from 'antd';
import { categories, ExpenseType } from '@/app/typedefs/types';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';

type FormPropsType = {
  category: categories;
};

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
      }}
      initialValues={{ remember: true, category: category ? category : undefined }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<ExpenseType>
        label="Category"
        name="category"
        rules={[{ required: true, message: 'Please enter a category' }]}
      >
        <Select disabled={category ? true : false}>
          <Select.Option value="Food & Drinks">Food & Drinks</Select.Option>
          <Select.Option value="Groceries">Groceries</Select.Option>
          <Select.Option value="Shopping">Shopping</Select.Option>
          <Select.Option value="Transport">Transport</Select.Option>
          <Select.Option value="Entertainment">Entertainment</Select.Option>
          <Select.Option value="Utilities">Utilities</Select.Option>
          <Select.Option value="Health & Fitness">Health & Fitness</Select.Option>
          <Select.Option value="Home">Home</Select.Option>
          <Select.Option value="Savings">Savings</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item<ExpenseType>
        label="Expense"
        name="expense"
        rules={[{ required: true, message: 'Please Enter the expense!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<ExpenseType>
        name="amount"
        label="Amount"
        rules={[{ required: true, message: 'Enter the amount of the expense' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<ExpenseType>
        name="date"
        label="Date"
        rules={[{ type: 'object' as const, required: true, message: 'Please select date!' }]}
      >
        <DatePicker />
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
