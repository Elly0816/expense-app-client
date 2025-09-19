import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Flex } from 'antd';

const Features: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Flex>
      <h1 style={{ color: COLORS[theme].textHeading }} className="text-base lg:text-5xl font-bold">
        Key Features
      </h1>
    </Flex>
  );
};

export default Features;
