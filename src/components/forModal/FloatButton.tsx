'use client';

// import { useTheme } from '@/contexts/themeContext';
import { FloatButton } from 'antd';

type MyFloatButtonPropsType = {
  onClick: () => void;
};

const MyFloatButton: React.FC<MyFloatButtonPropsType> = ({ onClick }) => {
  // const { theme } = useTheme();

  return (
    <FloatButton
      style={{
        bottom: '80%',
        // backgroundColor: COLORS[theme].background,
        // color: COLORS[theme].textBody,
      }}
      onClick={onClick}
    />
  );
};

export default MyFloatButton;
