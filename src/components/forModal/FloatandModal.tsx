'use client';

// import Category, { CategoryItem } from './Category';
import MyFloatButton from './FloatButton';
import { useState } from 'react';
import MyModal from './MyModal';
import { categories } from '@/app/typedefs/types';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { EditOutlined } from '@ant-design/icons';

type FLoatAndModalPropsType = {
  categories: categories;
};

const FloatAndModal: React.FC<FLoatAndModalPropsType> = ({ categories }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleFloatClick = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const { theme } = useTheme();

  return (
    <>
      <MyFloatButton
        onClick={handleFloatClick}
        icon={
          <EditOutlined
          // style={{ color: COLORS[theme].textHeading }}
          />
        }
        style={{
          // bottom: '80%',
          right: '5%',
          top: '20%',
          backgroundColor: COLORS[theme].accent,
          color: COLORS[theme].textBody,
        }}
        toolTip="Add Expense"
      />
      <MyModal onCancel={handleModalCancel} open={isModalOpen} category={categories} />
    </>
  );
};

export default FloatAndModal;
