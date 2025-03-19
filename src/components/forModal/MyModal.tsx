'use client';

import { Modal } from 'antd';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';

type MyModalPropsType = {
  open: boolean;
  onCancel: () => void;
};

const MyModal: React.FC<MyModalPropsType> = ({ onCancel, open }) => {
  const { theme } = useTheme();
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textBody }}
    >
      <div>
        <span>This is my modal</span>
      </div>
    </Modal>
  );
};

export default MyModal;
