'use client';
import '@ant-design/v5-patch-for-react-19';
import Categories from '@/components/Categories';
import FloatAndModal from '@/components/forModal/FloatandModal';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import { queryExpenses } from '@/hooks/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import ButtonAndDrawer from '@/components/forDrawer/ButtonandDrawer';

const Home: React.FC = () => {
  const {} = useAuth() as AuthContextType;

  return (
    <QueryClientProvider client={queryExpenses}>
      <>
        <FloatAndModal categories={undefined} />
        <ButtonAndDrawer />
        <Categories />
      </>
    </QueryClientProvider>
  );
};

export default Home;
