'use client';

// import Category, { CategoryItem } from './Category';
import MyFloatButton from './FloatButton';
import { CSSProperties, useEffect, useState } from 'react';
import MyModal from './MyModal';
import { categories } from '@/app/typedefs/types';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { EditOutlined } from '@ant-design/icons';

export type FloatAndModalPropsType = {
  categories: categories;
  isModalOpenedFromParent?: boolean;
  setModalFromParent?: (modalIsOpen: boolean) => void;
  style?: CSSProperties;
};

const FloatAndModal: React.FC<FloatAndModalPropsType> = ({
  categories,
  isModalOpenedFromParent,
  setModalFromParent,
  style,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showExpense, setShowExpense] = useState<boolean>(false);

  useEffect(() => {
    if (isModalOpenedFromParent) {
      setIsModalOpen(true);
      setShowExpense(true);
    }
  }, [isModalOpenedFromParent]);

  const handleFloatClick = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    if (setModalFromParent) {
      setModalFromParent(false);
    }
    setShowExpense(false);
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
          // right: '5%',
          // top: '20%',
          position: 'relative',
          backgroundColor: COLORS[theme].accent,
          color: COLORS[theme].textBody,
          ...style,
        }}
        toolTip="Add Expense"
      />
      <MyModal
        showExpense={showExpense}
        onCancel={handleModalCancel}
        open={isModalOpen}
        category={categories}
      />
    </>
  );
};

export default FloatAndModal;
