'use client';
import { COLORS } from '@/Colors';
import { Flex } from 'antd';
import Card from '@/components/Card';
import cats from '@/utilities/categoryItems';
import { useTheme } from '@/contexts/themeContext';
import Title from 'antd/es/typography/Title';
import { useQuery } from '@tanstack/react-query';
import { homeRoute } from '@/api/homeroute';
import { QUERY_KEYS } from '@/constants';

const Categories: React.FC = () => {
  const { theme } = useTheme();

  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.home,
    queryFn: homeRoute,
    select: (data) => {
      return typeof data === 'string' ? data : JSON.stringify(data);
    },
  });
  // const isLoading = true;
  if (data) {
    console.log('data\n');
    console.log(data);
  }
  return isLoading ? (
    <p>Loading.....</p>
  ) : (
    <div className="flex flex-col flex-1" style={{ backgroundColor: COLORS[theme].background }}>
      <Title
        style={{ marginLeft: 50, marginBottom: 5, marginTop: 5, color: COLORS[theme].textHeading }}
        level={2}
      >
        Categories
      </Title>
      <Flex
        gap={8}
        wrap="wrap"
        style={{
          backgroundColor: COLORS[theme].background,
          padding: 10,
          paddingTop: 30,
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
