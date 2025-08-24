/**
 * Module: src/utilities/utilities.ts
 * Purpose: Helper utilities for data transformations and formatting used by the UI.
 * Exports: getTotalFromExpenses, getPercentChange, getColorFromPercentChange, getTotalAndPercentChange, currentDate, getDayJsFromDate.
 */
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

const today = new Date();
// .toLocaleDateString()
// .replace(/\//g, '-').split('-');

const currentYear = today.toLocaleDateString('default', { year: 'numeric' });
const currentMonth = today.toLocaleDateString('default', { month: '2-digit' });
const currentDay = today.toLocaleDateString('default', { day: '2-digit' });
// export const currentDate = `${currentDateParts[2]}-${
//   Number(currentDateParts[0]) < 10 ? `0${currentDateParts[0]}` : `${currentDateParts[0]}`
// }-${Number(currentDateParts[1]) < 10 ? `0${currentDateParts[1]}` : `${currentDateParts[1]}`}`;

export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

export const getDayJsFromDate: (date: Date) => string = (date) => {
  const currentYear = date.toLocaleDateString('default', { year: 'numeric' });
  const currentMonth = date.toLocaleDateString('default', { month: '2-digit' });
  const currentDay = date.toLocaleDateString('default', { day: '2-digit' });

  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
  return currentDate;
};
