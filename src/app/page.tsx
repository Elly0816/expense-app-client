'use client';
import '@ant-design/v5-patch-for-react-19';
import Categories from '@/components/Categories';
import FloatAndModal from '@/components/forModal/FloatandModal';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { queryExpenses } from '@/hooks/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import ButtonAndDrawer from '@/components/forDrawer/ButtonandDrawer';
import { useEffect } from 'react';
import { AUTH_VALUE } from '@/constants';

const Home: React.FC = () => {
  const {} = useAuth() as AuthContextType;

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      localStorage.setItem(AUTH_VALUE, hash);
      window.location.href = '/';
    }
  }, []);

  return (
    <QueryClientProvider client={queryExpenses}>
      <>
        <FloatAndModal categories={undefined} />
        <ButtonAndDrawer category={undefined} />
        <Categories />
      </>
    </QueryClientProvider>
  );
};

export default Home;
