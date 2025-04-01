'use client';
import { COLORS } from '@/Colors';
import { Flex } from 'antd';
import Card from '@/components/Card';
import cats from '@/utilities/categoryItems';
import { useTheme } from '@/contexts/themeContext';
import Title from 'antd/es/typography/Title';
import { useQuery } from '@tanstack/react-query';
import { homeRoute } from '@/my_api/homeroute';

const Categories: React.FC = () => {
  const { theme } = useTheme();

  const { data, isLoading } = useQuery({
    queryKey: ['home'],
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
    <p>Loading...</p>
  ) : (
    <div className="flex flex-col flex-1" style={{ backgroundColor: COLORS[theme].background }}>
      {/* <h3 className="text-3xl mb-2.5 ml-12" style={{ color: COLORS[theme].textHeading }}>
        Categories
      </h3> */}
      <Title
        style={{ marginLeft: 50, marginBottom: 5, marginTop: 5, color: COLORS[theme].textHeading }}
        level={2}
      >
        Categories
        {data}
      </Title>
      {/* <hr style={{ borderColor: COLORS[theme].border }} /> */}
      <Flex
        // justify="center"
        // align="flex-start"
        // className="p-3.5 content-start"
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
