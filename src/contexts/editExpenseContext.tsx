/**
 * Module: src/contexts/editExpenseContext.tsx
 * Purpose: Context for passing an expense being edited and loading state to child components.
 * Exports: EditContextProvider, useEdit, and editExpenseContextType.
 */
import { ExpenseType } from '@/app/typedefs/types';
import { createContext, ReactNode, useContext } from 'react';
export type editExpenseContextType = {
  expense: ExpenseType | undefined;
  loading: boolean;
};

const EditContext = createContext<editExpenseContextType | undefined>(undefined);

export const EditContextProvider: ({
  children,
  expense,
  loading,
}: {
  children: ReactNode;
  expense: ExpenseType | undefined;
  loading: boolean;
}) => ReactNode = ({ children, expense, loading }) => {
  return <EditContext.Provider value={{ expense, loading }}>{children}</EditContext.Provider>;
};

export const useEdit: () => editExpenseContextType = () => {
  const edit = useContext(EditContext);

  if (edit) {
    return edit;
  } else {
    throw new Error('Use within a context');
  }
};
