import { COLORS } from '@/Colors';
import { Flex } from 'antd';
import Card from '@/components/Card';
import cats from '@/utilities/categoryItems';

const Categories: React.FC = () => {
  return (
    <div className="flex flex-col flex-1" style={{ backgroundColor: COLORS.background }}>
      <h3 className="text-3xl mb-2.5 ml-12" style={{ color: COLORS.textHeading }}>
        Categories
      </h3>
      <hr />
      <Flex
        gap="small"
        justify="space-evenly"
        wrap="wrap"
        style={{ backgroundColor: COLORS.background, padding: 10 }}
      >
        {cats.map((c, i) => (
          <Card key={i} {...c} />
        ))}
      </Flex>
    </div>
  );
};

export default Categories;
