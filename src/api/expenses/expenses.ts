import { categories, ExpenseType } from '@/app/typedefs/types';
import api from '../baseUrl';

type createExpenseType = {
  expense: ExpenseType;
};

type getExpenseByCategoryType = {
  category: categories;
};

export const createExpense: ({ expense }: createExpenseType) => Promise<ExpenseType> = async ({
  expense,
}) => {
  const response = await api.post('/expense', expense);
  return response.data;
};

export const getExpenseByCategory: ({
  category,
}: getExpenseByCategoryType) => Promise<ExpenseType[]> = async ({ category }) => {
  const response = await api.get(`/expense/${category}`);
  console.log('This is the response data from the category page request');
  console.log(response.data);
  return response.data;

  // return await api.get(`/expense/${category}`);
};
