import {
  AuthenticatedType,
  createExpenseType,
  DeleteExpenseReturnType,
  ExpenseType,
  getExpenseByCategoryType,
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
  console.log('This is the response data from the category page request');
  console.log(response.data);
  return response.data;

  // return await api.get(`/expense/${category}`);
};

export const deleteExpense: ({
  id,
}: {
  id: number;
}) => Promise<DeleteExpenseReturnType | AuthenticatedType> = async ({ id }) => {
  const response = await api.delete(`/expense/${id}`);
  console.log('This is the response data from deleting the expense');
  console.log(response.data);
  return response.data;
};
