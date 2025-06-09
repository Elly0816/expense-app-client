import React, { useState } from 'react';
import FloatButton from '../forModal/FloatButton';
import { ExpandAltOutlined } from '@ant-design/icons';
import MyDrawer from './MyDrawer';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';

const ButtonAndDrawer: React.FC = () => {
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
        icon={<ExpandAltOutlined style={{ color: COLORS[theme].textHeading }} />}
        style={{
          // bottom: '80%',
          right: '5%',
          top: '30%',
          backgroundColor: COLORS[theme].accent,
          color: COLORS[theme].textBody,
        }}
      />
      <MyDrawer onClose={onClose} open={open} />
    </>
  );
};

export default ButtonAndDrawer;
