import { Login } from '@/components/Login';
import { Flex } from 'antd';

const LoginPage: React.FC = () => {
  return (
    <Flex className="justify-center items-center">
      <Login containerStyle={{ justifyContent: 'center', alignItems: 'center' }} />
    </Flex>
  );
};

export default LoginPage;
