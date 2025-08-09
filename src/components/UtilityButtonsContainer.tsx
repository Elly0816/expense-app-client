import { Flex } from 'antd';
import ChatButtonAndDrawer, { ChatButtonAndDrawerPropsType } from './forChat/chatButtonAndDrawer';
import ButtonAndDrawer, { ButtonAndDrawerPropsType } from './forDrawer/ButtonandDrawer';
import FloatAndModal, { FloatAndModalPropsType } from './forModal/FloatandModal';
import { useSearchParams } from 'next/navigation';
import { searchParamsType } from '@/app/category/[title]/page';
import { CSSProperties } from 'react';

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
  const searchParams = useSearchParams();

  const name = searchParams.get('name') as searchParamsType['name'];
  const width: CSSProperties['width'] = !name ? 50 : '30%';
  const height: CSSProperties['height'] = !name ? '30%' : 50;
  const position: CSSProperties['position'] = !name ? 'relative' : 'initial';
  return (
    <Flex
      gap={30}
      vertical={!name}
      style={{
        position: 'absolute',
        left: 50,
        top: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        zIndex: 20,
        margin: 10,
      }}
    >
      {/* <FloatAndModal categories={undefined} /> */}
      <FloatAndModal {...forModal} style={{ position: position }} />
      <ChatButtonAndDrawer {...forChat} style={{ position: position }} />
      {/* <ButtonAndDrawer category={undefined} /> */}
      <ButtonAndDrawer {...forDrawer} style={{ position: position }} />
    </Flex>
  );
};

export default UtilityButtonsContainer;
