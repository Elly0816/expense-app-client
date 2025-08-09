'use client';
import '@ant-design/v5-patch-for-react-19';
import Categories from '@/components/Categories';
import FloatAndModal from '@/components/forModal/FloatandModal';
import { AuthContextType, useAuth } from '@/contexts/authContext';
import ButtonAndDrawer from '@/components/forDrawer/ButtonandDrawer';
import { useEffect } from 'react';
import { AUTH_VALUE } from '@/constants';
import { EditContextProvider } from '@/contexts/editExpenseContext';
import ChatButtonAndDrawer from '@/components/forChat/chatButtonAndDrawer';
import UtilityButtonsContainer from '@/components/UtilityButtonsContainer';

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
        <UtilityButtonsContainer
          forChat={{}}
          forDrawer={{ category: undefined }}
          forModal={{ categories: undefined }}
        />
      </EditContextProvider>
      <Categories />
    </>
  );
};

export default Home;
