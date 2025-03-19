'use client';

import Category, { CategoryItem } from './Category';
import MyFloatButton from '../forModal/FloatButton';
import { useState } from 'react';
import MyModal from '../forModal/MyModal';

const items: CategoryItem[] = [
  { key: '1', date: new Date(), amount: 15, expense: 'Something Nice' },
  { key: '2', date: new Date(), amount: 25, expense: 'Another nice thing' },
];

const CategoryAndModal: React.FC = () => {
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
      <MyModal onCancel={handleModalCancel} open={isModalOpen} />
      <Category items={items} />
    </>
  );
};

export default CategoryAndModal;
