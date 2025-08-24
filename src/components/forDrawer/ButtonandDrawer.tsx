/**
 * Module: src/components/forDrawer/ButtonandDrawer.tsx
 * Purpose: Floating button that opens the data drawer for a selected category.
 * Exports: default ButtonAndDrawer component.
 */
import React, { CSSProperties, useState } from 'react';
import FloatButton from '../forModal/FloatButton';
import { ExpandAltOutlined } from '@ant-design/icons';
import MyDrawer from './MyDrawer';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';
import { categories } from '@/app/typedefs/types';

export type ButtonAndDrawerPropsType = {
  category: categories;
  style?: CSSProperties;
};

const ButtonAndDrawer: React.FC<ButtonAndDrawerPropsType> = ({ category, style }) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FloatButton
        onClick={showDrawer}
        icon={
          <ExpandAltOutlined
          // style={{ color: COLORS[theme].textHeading }}
          />
        }
        style={{
          // bottom: '80%',
          // left: '5%',
          // top: '20%',
          position: 'relative',
          backgroundColor: COLORS[theme].accent,
          color: COLORS[theme].textBody,
          ...style,
        }}
        toolTip="See more Info"
      />
      <MyDrawer category={category} onClose={onClose} open={open} />
    </>
  );
};

export default ButtonAndDrawer;
