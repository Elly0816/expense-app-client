import Header from '@/components/Header';
import Categories from '@/components/Categories';
import { Layout } from 'antd';

const Home: React.FC = () => {
  return (
    // <Flex>
    <Layout>
      <Header />
      <Categories />
    </Layout>
    // {/* </Flex> */}
  );
};

export default Home;
