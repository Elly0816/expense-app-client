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
