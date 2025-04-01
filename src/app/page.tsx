'use client';
// import '@ant-design/v5-patch-for-react-19';
import Categories from '@/components/Categories';
import FloatAndModal from '@/components/forModal/FloatandModal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Home: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    // <Flex>
    <QueryClientProvider client={queryClient}>
      <>
        <FloatAndModal categories={undefined} />
        <Categories />
      </>
    </QueryClientProvider>
    // {/* </Flex> */}
  );
};

export default Home;
