'use client';
import { COLORS } from '@/Colors';
import { Col, Flex, Row, Spin, Statistic } from 'antd';
import Card from '@/components/Card';
import cats from '@/utilities/categoryItems';
import { useTheme } from '@/contexts/themeContext';
import Title from 'antd/es/typography/Title';
import { useQuery } from '@tanstack/react-query';
import { homeRoute } from '@/api/homeroute';
import { QUERY_KEYS } from '@/constants';
import { currentDate, getTotalAndPercentChange } from '@/utilities/utilities';
import { getExpenseByPeriod } from '@/api/expenses/expenses';

const Categories: React.FC = () => {
  const { theme } = useTheme();

  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.home,
    queryFn: homeRoute,
    select: (data) => {
      return typeof data === 'string' ? data : JSON.stringify(data);
    },
  });

  const getPastMonth = async () =>
    getExpenseByPeriod({
      category: undefined,
      currentDay: currentDate,
      period: 'month',
    });
  const { data: monthData, isLoading: monthIsLoading } = useQuery({
    queryKey: QUERY_KEYS['month'],
    queryFn: getPastMonth,
  });
  const { total: pastMonthTotal } = getTotalAndPercentChange(monthData);
  // const loading = true;
  if (data) {
    //console.log('data\n');
    //console.log(data);
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
          <Flex
            vertical
            gap={8}
            wrap="wrap"
            style={{
              backgroundColor: COLORS[theme].background,
              width: '80%',
              height: '15%',
            }}
          >
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
            <Row
              gutter={16}
              style={{
                marginLeft: '20%',
                marginBottom: 5,
                marginTop: 5,
                color: COLORS[theme].textHeading,
              }}
            >
              <Col span={12}>
                <Statistic
                  className="text xs md:text-xl lg:text-3xl"
                  // title="Total Spent in past 30 days"
                  title={<Title level={4}>Total spent in past 30 days</Title>}
                  value={pastMonthTotal?.asString}
                  loading={monthIsLoading}
                />
              </Col>
            </Row>
          </Flex>
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
              height: '85%',
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
