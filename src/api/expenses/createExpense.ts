import { ExpenseType } from '@/app/typedefs/types';
import api from '../baseUrl';

type createExpenseType = {
  expense: ExpenseType;
};

export const createExpense: ({ expense }: createExpenseType) => Promise<ExpenseType> = async ({
  expense,
}) => {
  const response = await api.post('/expense', expense);
  return response.data;
};
