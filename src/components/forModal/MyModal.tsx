/**
 * Module: src/components/forModal/MyModal.tsx
 * Purpose: Modal wrapper that shows `MyForm` and applies theme colors.
 * Exports: default MyModal component.
 */
'use client';

import { Modal } from 'antd';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';
import MyForm from './MyForm';
import { categories } from '@/app/typedefs/types';
import Title from 'antd/es/typography/Title';
import { useEdit } from '@/contexts/editExpenseContext';

type MyModalPropsType = {
  open: boolean;
  onCancel: () => void;
  category: categories;
  showExpense: boolean;
};

const MyModal: React.FC<MyModalPropsType> = ({ onCancel, open, category, showExpense }) => {
  const { theme } = useTheme();

  const { loading } = useEdit();
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      style={{
        minWidth: '50%',
        maxWidth: '80%',
        height: '30%',
        top: '10%',
        padding: 0,
        borderRadius: 24,
        backgroundColor: COLORS[theme].background,
        color: COLORS[theme].textBody,
      }}
      styles={{
        body: {
          backgroundColor: COLORS[theme].background,
          color: COLORS[theme].textBody,
        },
        content: {
          backgroundColor: COLORS[theme].background,
          color: COLORS[theme].textBody,
        },
      }}
      loading={loading}
    >
      <Title style={{ color: COLORS[theme].textHeading, marginLeft: 50, marginTop: 10 }} level={5}>
        Enter an Expense
      </Title>
      <MyForm showExpense={showExpense} category={category} closeModal={onCancel} />
    </Modal>
  );
};

export default MyModal;
