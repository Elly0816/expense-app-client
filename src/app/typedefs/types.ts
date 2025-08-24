/**
 * Module: src/app/typedefs/types.ts
 * Purpose: Shared TypeScript types used across the app (expenses, auth, API return shapes, etc.)
 * Exports: categories, ExpenseType, user, and various API return types.
 */
export type categories =
  | 'Food & Drinks'
  | 'Groceries'
  | 'Shopping'
  | 'Transport'
  | 'Entertainment'
  | 'Utilities'
  | 'Health & Fitness'
  | 'Home'
  | 'Savings'
  | 'Education'
  | undefined;

export type ExpenseType = {
  category: categories;
  amount: number;
  expense: string;
  date: Date;
  id: number;
};

export type user = {
  id: number;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string | undefined;
};

export type createExpenseType = {
  text: string;
};

export type getExpenseByCategoryType = {
  category: categories;
};

export type GetExpenseReturnType = {
  expenses: ExpenseType[];
};

export type AuthenticatedType = {
  isAuthenticated: boolean;
};

export type AuthType = AuthenticatedType & {
  user: user;
};

export type DeleteExpenseReturnType = {
  text: string;
};

export type EditExpenseReturnType = {
  expense: ExpenseType;
};

export type getExpenseByIdType = {
  id: number;
};

export type GetExpenseByPeriod = {
  category: categories;
  currentDay: string;
  period: 'day' | 'week' | 'month' | 'year';
};

export type ExpenseByPeriodReturnType = {
  expenses: {
    last: ExpenseType[];
    prior: ExpenseType[];
  };
};

export type ChatPropsType = {
  messages: MessageType[];
};

export type MessageType = {
  message: string;
};
