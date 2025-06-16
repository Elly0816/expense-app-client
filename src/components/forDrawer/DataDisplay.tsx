import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Row, Col, Statistic } from 'antd';
import { CSSProperties, ReactNode } from 'react';
import Title from 'antd/es/typography/Title';
import { categories, GetExpenseReturnType } from '@/app/typedefs/types';
import {
  currentDate,
  getColorFromPercentChange,
  getTotalAndPercentChange,
  getTotalFromExpenses,
} from '@/utilities/utilities';
import { FaArrowRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getExpenseByPeriod } from '@/api/expenses/expenses';

type MyTitleWithChildren = {
  children: ReactNode;
  title?: never;
};

type MyTitleWithTitle = {
  title: string;
  children?: never;
};

type ChildrenOrTitle = MyTitleWithChildren | MyTitleWithTitle;

type MyTitlePropsType = {
  style?: CSSProperties;
} & ChildrenOrTitle;

const MyTitle: React.FC<MyTitlePropsType> = ({ title, style, children }) => {
  const { theme } = useTheme();
  return (
    <Title level={5} style={{ color: COLORS[theme].textHeading, fontSize: 12, ...style }}>
      {title ? title : children}
    </Title>
  );
};
const style = {
  // backgroundColor: COLORS[theme].cardBackground,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  minWidth: '50%',
} as CSSProperties;

const statisticStyle = { width: '50%', textAlign: 'left', marginBottom: 20 } as CSSProperties;

type DataDisplayPropsType = {
  responseFromRange: GetExpenseReturnType | undefined;
  loading: boolean;
  category: categories;
  dates: [string, string];
};

const DataDisplay: React.FC<DataDisplayPropsType> = ({
  responseFromRange,
  loading,
  dates,
  category,
}) => {
  const { theme } = useTheme();
  const textColorStyle = { color: COLORS[theme].textHeading } as CSSProperties;

  const getPastDay = async () =>
    getExpenseByPeriod({
      category: category,
      currentDay: currentDate,
      period: 'day',
    });

  const { data: dayData, isLoading: dayIsLoading } = useQuery({
    queryKey: QUERY_KEYS['day'],
    queryFn: getPastDay,
  });

  // let pastDayTotal;
  // let pastDayPercentChange;
  // if (dayData) {
  //   pastDayTotal = getTotalFromExpenses({
  //     expenses: (dayData as ExpenseByPeriodReturnType)?.expenses?.last,
  //   });
  //   pastDayPercentChange = getPercentChange(
  //     getTotalFromExpenses({ expenses: (dayData as ExpenseByPeriodReturnType)?.expenses?.prior })
  //       .asNumber,
  //     getTotalFromExpenses({ expenses: (dayData as ExpenseByPeriodReturnType)?.expenses?.last })
  //       .asNumber
  //   );

  //   //console.log('The data for the past day is: ');
  //   //console.log(dayData);
  //   //console.log('The total for the past day is: ', pastDayTotal);
  //   //console.log('The percent change for the past day is: ', pastDayPercentChange);
  // }

  const { total: pastDayTotal, percentChange: pastDayPercentChange } =
    getTotalAndPercentChange(dayData);

  const getPastWeek = async () =>
    getExpenseByPeriod({
      category: category,
      currentDay: currentDate,
      period: 'week',
    });
  const { data: weekData, isLoading: weekIsLoading } = useQuery({
    queryKey: QUERY_KEYS['week'],
    queryFn: getPastWeek,
  });

  // const pastWeekTotal = getTotalFromExpenses({
  //   expenses: (weekData as ExpenseByPeriodReturnType)?.expenses?.last,
  // });
  // const pastWeekPercentChange = getPercentChange(
  //   getTotalFromExpenses({ expenses: (weekData as ExpenseByPeriodReturnType)?.expenses?.prior })
  //     .asNumber,
  //   getTotalFromExpenses({ expenses: (weekData as ExpenseByPeriodReturnType)?.expenses?.last })
  //     .asNumber
  // );

  const { total: pastWeekTotal, percentChange: pastWeekPercentChange } =
    getTotalAndPercentChange(weekData);

  const getPastMonth = async () =>
    getExpenseByPeriod({
      category: category,
      currentDay: currentDate,
      period: 'month',
    });
  const { data: monthData, isLoading: monthIsLoading } = useQuery({
    queryKey: QUERY_KEYS['month'],
    queryFn: getPastMonth,
  });
  // const pastMonthTotal = getTotalFromExpenses({
  //   expenses: (monthData as ExpenseByPeriodReturnType)?.expenses?.last,
  // });
  // const pastMonthPercentChange = getPercentChange(
  //   getTotalFromExpenses({ expenses: (monthData as ExpenseByPeriodReturnType)?.expenses?.prior })
  //     .asNumber,
  //   getTotalFromExpenses({ expenses: (monthData as ExpenseByPeriodReturnType)?.expenses?.last })
  //     .asNumber
  // );

  const { total: pastMonthTotal, percentChange: pastMonthPercentChange } =
    getTotalAndPercentChange(monthData);

  const getPastYear = async () =>
    getExpenseByPeriod({
      category: category,
      currentDay: currentDate,
      period: 'year',
    });
  const { data: yearData, isLoading: yearIsLoading } = useQuery({
    queryKey: QUERY_KEYS['year'],
    queryFn: getPastYear,
  });

  // const pastYearTotal = getTotalFromExpenses({
  //   expenses: (yearData as ExpenseByPeriodReturnType)?.expenses?.last,
  // });
  // const pastYearPercentChange = getPercentChange(
  //   getTotalFromExpenses({ expenses: (yearData as ExpenseByPeriodReturnType)?.expenses?.prior })
  //     .asNumber,
  //   getTotalFromExpenses({ expenses: (yearData as ExpenseByPeriodReturnType)?.expenses?.last })
  //     .asNumber
  // );

  const { total: pastYearTotal, percentChange: pastYearPercentChange } =
    getTotalAndPercentChange(yearData);

  return (
    <Col style={{}}>
      {(responseFromRange || loading) && (
        <>
          <Row gutter={16} style={{ ...style, minWidth: '100%' }}>
            <Statistic
              loading={loading}
              style={{ ...statisticStyle, width: '100%' }}
              title={
                <MyTitle
                  style={{
                    fontSize: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  {`${dates[0]}`} <FaArrowRight /> {`${dates[1]}`}
                </MyTitle>
              }
              value={`$${getTotalFromExpenses(
                responseFromRange as GetExpenseReturnType
              ).asNumber?.toFixed(2)}`}
              valueStyle={textColorStyle}
            />
          </Row>
          <hr />
        </>
      )}
      <>
        <Row gutter={16} style={style}>
          <Statistic
            loading={dayIsLoading}
            style={statisticStyle}
            title={<MyTitle title="Past 24 hours" />}
            value={pastDayTotal?.asString}
            valueStyle={textColorStyle}
            precision={2}
          />
          <Statistic
            loading={dayIsLoading}
            style={{ ...statisticStyle, marginTop: 23 }}
            title={<MyTitle title="" />}
            value={pastDayPercentChange?.percentAsString}
            valueStyle={{
              color: getColorFromPercentChange(
                pastDayPercentChange?.percentAsNumber as number,
                COLORS[theme].textBody
              ),
            }}
          />
        </Row>
        <hr />
      </>
      <>
        <Row gutter={16} style={style}>
          <Statistic
            loading={weekIsLoading}
            style={statisticStyle}
            title={<MyTitle title="Past Week" />}
            value={pastWeekTotal?.asString}
            valueStyle={textColorStyle}
            precision={2}
          />
          <Statistic
            loading={weekIsLoading}
            style={{ ...statisticStyle, marginTop: 23 }}
            title={<MyTitle title="" />}
            value={pastWeekPercentChange?.percentAsString}
            valueStyle={{
              color: getColorFromPercentChange(
                pastWeekPercentChange?.percentAsNumber as number,
                COLORS[theme].textBody
              ),
            }}
          />
        </Row>
        <hr />
      </>
      <>
        <Row gutter={16} style={style}>
          <Statistic
            loading={monthIsLoading}
            style={statisticStyle}
            title={<MyTitle title="Past Month" />}
            value={pastMonthTotal?.asString}
            precision={2}
            valueStyle={textColorStyle}
          />
          <Statistic
            loading={monthIsLoading}
            style={{ ...statisticStyle, marginTop: 23 }}
            title={<MyTitle title="" />}
            value={pastMonthPercentChange?.percentAsString}
            precision={2}
            valueStyle={{
              color: getColorFromPercentChange(
                pastMonthPercentChange?.percentAsNumber as number,
                COLORS[theme].textBody
              ),
            }}
          />
        </Row>
        <hr />
      </>
      <Row gutter={16} style={style}>
        <Statistic
          loading={yearIsLoading}
          style={statisticStyle}
          title={<MyTitle title="Past Year" />}
          value={pastYearTotal?.asString}
          valueStyle={textColorStyle}
          precision={2}
        />
        <Statistic
          loading={yearIsLoading}
          style={{ ...statisticStyle, marginTop: 23 }}
          title={<MyTitle title="" />}
          value={pastYearPercentChange?.percentAsString}
          valueStyle={{
            color: getColorFromPercentChange(
              pastYearPercentChange?.percentAsNumber as number,
              COLORS[theme].textBody
            ),
          }}
        />
      </Row>
    </Col>
  );
};

export default DataDisplay;
