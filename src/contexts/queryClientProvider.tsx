/**
 * Module: src/contexts/queryClientProvider.tsx
 * Purpose: Exposes a shared react-query client used for queries across the app.
 * Exports: queryExpenses (QueryClient) and default QueryClientProvider component.
 */
'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
type customQueryClientProviderType = {
  children: ReactNode;
};

export const queryExpenses = new QueryClient();
const CustomQueryClientProvider: React.FC<customQueryClientProviderType> = ({ children }) => {
  return <QueryClientProvider client={queryExpenses}>{children}</QueryClientProvider>;
};

export default CustomQueryClientProvider;
