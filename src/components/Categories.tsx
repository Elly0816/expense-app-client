'use client';
import { COLORS } from '@/Colors';
import { Flex } from 'antd';
import Card from '@/components/Card';
import cats from '@/utilities/categoryItems';
import { useTheme } from '@/contexts/themeContext';

const Categories: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col flex-1" style={{ backgroundColor: COLORS[theme].background }}>
      <h3 className="text-3xl mb-2.5 ml-12" style={{ color: COLORS[theme].textHeading }}>
        Categories
      </h3>
      <hr style={{ borderColor: COLORS[theme].border }} />
      <Flex
        // justify="center"
        // align="flex-start"
        // className="p-3.5 content-start"
        gap={8}
        wrap="wrap"
        style={{
          backgroundColor: COLORS[theme].background,
          padding: 10,
          alignContent: 'flex-start',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {cats.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </Flex>
    </div>
  );
};

export default Categories;
