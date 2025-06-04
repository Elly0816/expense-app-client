'use client';
import { COLORS } from '@/Colors';
import { Flex, Spin } from 'antd';
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
  // const loading = true;
  if (data) {
    console.log('data\n');
    console.log(data);
  }
  return (
    <div
      className="flex flex-col flex-1 w-full"
      style={{ backgroundColor: COLORS[theme].background, minHeight: '100%' }}
    >
      {isLoading ? (
        <Title
          style={{
            marginLeft: 50,
            marginBottom: 5,
            marginTop: 5,
            color: COLORS[theme].textHeading,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          level={2}
        >
          {/* Loading... */}
          <Flex className="justify-center items-center h-full">
            <Spin />
          </Flex>
        </Title>
      ) : (
        <>
          <Title
            style={{
              marginLeft: 50,
              marginBottom: 5,
              marginTop: 5,
              color: COLORS[theme].textHeading,
            }}
            level={2}
          >
            Categories
          </Title>
          <Flex
            gap={8}
            wrap="wrap"
            style={{
              backgroundColor: COLORS[theme].background,
              padding: '30px 10px 10px',
              width: '80%', // Control container width
              margin: '0 auto', // Center the container
              // display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100%',
            }}
            className="category-container w-full"
          >
            {cats.map((c, i) => (
              <Card
                containerStyle={{ justifySelf: i == cats.length - 1 ? 'flex-start' : '' }}
                key={i}
                {...c}
              />
            ))}
          </Flex>
        </>
      )}
    </div>
  );
};

export default Categories;
