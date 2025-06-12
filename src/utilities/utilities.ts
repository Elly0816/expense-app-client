import { GetExpenseReturnType } from '@/app/typedefs/types';

export const getTotalFromExpenses: (data: GetExpenseReturnType) => number = (data) => {
  const total = data?.expenses?.reduce((prev, curr) => prev + Number(curr.amount), 0);

  return total;
};

export const getPercentChange: (start: number, end: number) => number = (start, end) => {
  const percentChange = ((end - start) / start) * 100;
  return percentChange;
};

export const getColorFromPercentChange: (change: number, defaultColor: string) => string = (
  change,
  defaultColor
) => {
  const color = change < 0 ? '#00ff00' : change > 0 ? '#ff0000' : defaultColor;
  return color;
};
