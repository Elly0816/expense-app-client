'use client';

import { Modal } from 'antd';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';
import MyForm from './MyForm';
import { categories } from '@/app/typedefs/types';
import Title from 'antd/es/typography/Title';

type MyModalPropsType = {
  open: boolean;
  onCancel: () => void;
  category: categories;
};

const MyModal: React.FC<MyModalPropsType> = ({ onCancel, open, category }) => {
  const { theme } = useTheme();
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      style={{
        minWidth: 800,
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
    >
      <Title style={{ color: COLORS[theme].textHeading, marginLeft: 50, marginTop: 10 }} level={5}>
        Enter an Expense
      </Title>
      <MyForm category={category} closeModal={onCancel} />
    </Modal>
  );
};

export default MyModal;
