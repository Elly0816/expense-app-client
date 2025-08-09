import { Flex } from 'antd';
import ChatButtonAndDrawer, { ChatButtonAndDrawerPropsType } from './forChat/chatButtonAndDrawer';
import ButtonAndDrawer, { ButtonAndDrawerPropsType } from './forDrawer/ButtonandDrawer';
import FloatAndModal, { FloatAndModalPropsType } from './forModal/FloatandModal';

export type UtilityButtonsContainerType = {
  forModal: FloatAndModalPropsType;
  forDrawer: ButtonAndDrawerPropsType;
  forChat: ChatButtonAndDrawerPropsType;
};

const UtilityButtonsContainer: React.FC<UtilityButtonsContainerType> = ({
  forModal,
  forDrawer,
  forChat,
}) => {
  return (
    <Flex
      gap={30}
      vertical
      style={{
        position: 'absolute',
        left: 50,
        top: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: '30%',
        zIndex: 20,
        margin: 10,
      }}
    >
      {' '}
      {/* <FloatAndModal categories={undefined} /> */}
      <FloatAndModal {...forModal} />
      <ChatButtonAndDrawer {...forChat} />
      {/* <ButtonAndDrawer category={undefined} /> */}
      <ButtonAndDrawer {...forDrawer} />
    </Flex>
  );
};

export default UtilityButtonsContainer;
