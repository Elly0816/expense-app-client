import {
  AuthenticatedType,
  ExpenseByPeriodReturnType,
  GetExpenseReturnType,
} from '@/app/typedefs/types';

export const getTotalFromExpenses: (data: GetExpenseReturnType) => {
  asNumber: number;
  asString: string;
} = (data) => {
  const total = data?.expenses?.reduce((prev, curr) => prev + Number(curr.amount), 0);
  //console.log(`The total is: ${total}`);

  const totalAsNumber = total;
  const totalAsString = `$${total?.toFixed(2)}`;
  return {
    asNumber: totalAsNumber,
    asString: totalAsString,
  };
};

export const getPercentChange: (
  initial: number,
  current: number
) => { percentAsString: string; percentAsNumber: number } = (initial, current) => {
  let percentChangeAsString = `${(((current - initial) / initial) * 100)?.toFixed(2)}%`;
  let percentChangeAsNumber = ((current - initial) / initial) * 100;
  //console.log('percentChangeAsNumber');
  //console.log(percentChangeAsNumber);
  if (percentChangeAsNumber === Infinity || isNaN(percentChangeAsNumber)) {
    percentChangeAsString = 'No Data';
    percentChangeAsNumber = 0;
  }
  return {
    percentAsNumber: percentChangeAsNumber,
    percentAsString: percentChangeAsString,
  };
};

export const getColorFromPercentChange: (change: number, defaultColor: string) => string = (
  change,
  defaultColor
) => {
  const color = change < 0 ? '#00ff00' : change > 0 ? '#ff0000' : defaultColor;
  return color;
};

export const getTotalAndPercentChange: (
  data: AuthenticatedType | ExpenseByPeriodReturnType | undefined
) => {
  total: { asNumber: number; asString: string } | undefined;
  percentChange: { percentAsString: string; percentAsNumber: number } | undefined;
} = (data) => {
  let total: { asNumber: number; asString: string } | undefined;
  let percentChange: { percentAsString: string; percentAsNumber: number } | undefined;
  if (data) {
    total = getTotalFromExpenses({
      expenses: (data as ExpenseByPeriodReturnType)?.expenses?.last,
    });
    percentChange = getPercentChange(
      getTotalFromExpenses({ expenses: (data as ExpenseByPeriodReturnType)?.expenses?.prior })
        .asNumber,
      getTotalFromExpenses({ expenses: (data as ExpenseByPeriodReturnType)?.expenses?.last })
        .asNumber
    );
  }

  return { total: total, percentChange: percentChange };
};
