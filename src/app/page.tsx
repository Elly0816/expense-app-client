'use client';
import '@ant-design/v5-patch-for-react-19';
import Categories from '@/components/Categories';
import FloatAndModal from '@/components/forModal/FloatandModal';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import ButtonAndDrawer from '@/components/forDrawer/ButtonandDrawer';
import { useEffect } from 'react';
import { AUTH_VALUE } from '@/constants';
import { EditContextProvider } from '@/contexts/editExpenseContext';

const Home: React.FC = () => {
  const {} = useAuth() as AuthContextType;

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      localStorage.setItem(AUTH_VALUE, hash.split('token=')[1]);
      window.location.href = '/';
    }
  }, []);

  return (
    <>
      <EditContextProvider expense={undefined} loading={false}>
        <FloatAndModal categories={undefined} />
      </EditContextProvider>
      <ButtonAndDrawer category={undefined} />
      <Categories />
    </>
  );
};

export default Home;
