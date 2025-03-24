'use client';

// import Category, { CategoryItem } from './Category';
import MyFloatButton from './FloatButton';
import { useState } from 'react';
import MyModal from './MyModal';
import { categories } from '@/app/typedefs/types';

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

  return (
    <>
      <MyFloatButton onClick={handleFloatClick} />
      <MyModal onCancel={handleModalCancel} open={isModalOpen} category={categories} />
    </>
  );
};

export default FloatAndModal;
