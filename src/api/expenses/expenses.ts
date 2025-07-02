import {
  AuthenticatedType,
  categories,
  createExpenseType,
  DeleteExpenseReturnType,
  EditExpenseReturnType,
  ExpenseByPeriodReturnType,
  ExpenseType,
  getExpenseByIdType,
  getExpenseByCategoryType,
  GetExpenseByPeriod,
  GetExpenseReturnType,
} from '@/app/typedefs/types';
import api from '../baseUrl';

export const createExpense: ({
  expense,
}: {
  expense: ExpenseType;
}) => Promise<createExpenseType | AuthenticatedType> = async ({ expense }) => {
  const response = await api.post('/expense', expense);
  return response.data;
};

export const getExpenseByCategory: ({
  category,
}: getExpenseByCategoryType) => Promise<GetExpenseReturnType | AuthenticatedType> = async ({
  category,
}) => {
  const response = await api.get(`/expense/${category}`);
  //console.log('This is the response data from the category page request');
  //console.log(response.data);
  return response.data;

  // return await api.get(`/expense/${category}`);
};

export const deleteExpense: ({
  id,
}: {
  id: number;
}) => Promise<DeleteExpenseReturnType | AuthenticatedType> = async ({ id }) => {
  const response = await api.delete(`/expense/${id}`);
  //console.log('This is the response data from deleting the expense');
  //console.log(response.data);
  return response.data;
};

export const getExpensesInRange: ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
  category: categories;
}) => Promise<GetExpenseReturnType | AuthenticatedType> = async ({
  startDate,
  endDate,
  category,
}) => {
  const response = await api.get(`/expense/date-range/${category}/${startDate}/${endDate}`);
  //console.log(response.data);
  return response.data;
};

export const getExpenseByPeriod: ({
  category,
  currentDay,
  period,
}: GetExpenseByPeriod) => Promise<ExpenseByPeriodReturnType | AuthenticatedType> = async ({
  category,
  currentDay,
  period,
}) => {
  const formattedDate = currentDay.replace(/\//g, '-');
  //console.log('This is the current year in the getExpenseByPeriodFunction: ', formattedDate);
  const response = await api.get(`/expense/${period}/${category}/${formattedDate}`);
  //console.log(response.data);

  return response.data;
};

export const getExpenseById: ({
  id,
}: getExpenseByIdType) => Promise<EditExpenseReturnType | AuthenticatedType> = async ({ id }) => {
  const response = await api.get(`/expense/id/${id}`);

  return response.data;
};

export const editExpense: ({
  expense,
}: {
  expense: ExpenseType;
}) => Promise<EditExpenseReturnType | AuthenticatedType> = async ({ expense }) => {
  const response = await api.patch(`expense/${expense.id}`, expense);
  return response.data;
};
