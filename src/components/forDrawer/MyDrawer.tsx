import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { DatePicker, Drawer, Flex } from 'antd';
import DataDisplay from './DataDisplay';

type MyDrawerPropsType = {
  onClose: () => void;
  open: boolean;
};

const { RangePicker } = DatePicker;
const MyDrawer: React.FC<MyDrawerPropsType> = ({ onClose, open }) => {
  const { theme } = useTheme();
  return (
    <Drawer
      style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textBody }}
      title="Expense History"
      closable={{ 'aria-label': 'Close Button' }}
      onClose={onClose}
      open={open}
    >
      <Flex vertical gap={5}>
        <RangePicker
          color={COLORS[theme].textBody}
          styles={{
            root: {
              backgroundColor: COLORS[theme].cardBackground,
              color: COLORS[theme].textBody,
              border: COLORS[theme].accent,
            },
            popup: {
              root: {
                backgroundColor: COLORS[theme].background,
                color: COLORS[theme].textBody,
                border: COLORS[theme].accent,
              },
            },
          }}
        />
        <DataDisplay />
      </Flex>
    </Drawer>
  );
};

export default MyDrawer;
