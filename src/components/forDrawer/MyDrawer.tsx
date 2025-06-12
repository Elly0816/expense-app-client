import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { DatePicker, Drawer, Flex } from 'antd';
import DataDisplay from './DataDisplay';
import Title from 'antd/es/typography/Title';
import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getExpensesInRange } from '@/api/expenses/expenses';
import { categories, GetExpenseReturnType } from '@/app/typedefs/types';
import { AuthContextType, useAuth } from '@/contexts/authContext';

type MyDrawerPropsType = {
  onClose: () => void;
  open: boolean;
  category: categories;
};

const { RangePicker } = DatePicker;
const MyDrawer: React.FC<MyDrawerPropsType> = ({ onClose, open, category }) => {
  const { theme } = useTheme();
  const [dates, setDates] = useState<{ startDate: string; endDate: string } | undefined>(undefined);

  const { checkAuth } = useAuth() as AuthContextType;

  const getExpenses = useCallback(async () => {
    return await getExpensesInRange({
      startDate: dates?.startDate as string,
      endDate: dates?.endDate as string,
      category: category,
    });
  }, [dates, category]);

  const handleDateChange: (dates: unknown, dateStrings: [string, string]) => void = (
    dates,
    dateStrings
  ) => {
    //console.log(dates);
    //console.log(dateStrings);
    if (dates) {
      setDates((dates) => ({
        ...dates,
        startDate: dateStrings[0],
        endDate: dateStrings[1],
      }));
    } else {
      setDates(undefined);
    }
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: QUERY_KEYS.customRange,
    queryFn: getExpenses,
    enabled: !!dates,
  });

  if (isError) {
    checkAuth();
  }

  //console.log(data);
  return (
    <Drawer
      style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textBody }}
      title={`${category ? category : ''} Expense History`}
      closable={{ 'aria-label': 'Close Button' }}
      onClose={onClose}
      open={open}
    >
      <Flex vertical gap={25}>
        <Title level={4} style={{ color: COLORS[theme].textHeading }}>
          Pick a range of dates
        </Title>
        <RangePicker
          allowClear
          onChange={handleDateChange}
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
        <DataDisplay
          responseFromRange={dates && (data as GetExpenseReturnType | undefined)}
          dates={[dates?.startDate as string, dates?.endDate as string]}
          loading={isLoading}
          category={category}
        />
      </Flex>
    </Drawer>
  );
};

export default MyDrawer;
