/**
 * Module: src/components/UtilityButtonsContainer.tsx
 * Purpose: Small container that places utility float buttons (chat, drawer, modal) on the page.
 * Exports: default UtilityButtonsContainer component.
 */
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
  const width: CSSProperties['width'] = !name ? 50 : '50%';
  const height: CSSProperties['height'] = !name ? '30%' : 50;
  const position: CSSProperties['position'] = !name ? 'relative' : 'initial';
  return (
    <Flex
      gap={30}
      vertical={!name}
      style={{
        // position: 'absolute',
        // left: 50,
        // top: '15%',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: width,
        height: height,
        // zIndex: 20,
        // margin: 10,
      }}
      className="fixed lg:absolute left-8 top-1/6 lg:left-14 lg:top-1/6 items-center justify-center z-20 m-2.5 "
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
