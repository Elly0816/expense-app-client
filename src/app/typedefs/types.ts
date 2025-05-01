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
  | undefined;

export type ExpenseType = {
  category: categories;
  amount: number;
  expense: string;
  date: Date;
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
