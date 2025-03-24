// import '@ant-design/v5-patch-for-react-19';
import Categories from '@/components/Categories';
import FloatAndModal from '@/components/forModal/FloatandModal';

const Home: React.FC = () => {
  return (
    // <Flex>
    <>
      <FloatAndModal categories={undefined} />
      <Categories />
    </>
    // {/* </Flex> */}
  );
};

export default Home;
