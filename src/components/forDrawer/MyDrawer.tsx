import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { DatePicker, Drawer, Flex } from 'antd';
import DataDisplay from './DataDisplay';
import { CloseCircleFilled } from '@ant-design/icons';

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
      //   closeIcon={<CloseCircleFilled color={COLORS[theme].textHeading}/>}
    >
      <Flex vertical gap={50}>
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
