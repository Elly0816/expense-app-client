/**
 * Module: src/components/forChat/chatButtonAndDrawer.tsx
 * Purpose: Floating chat button that toggles chat drawer.
 * Exports: default ChatButtonAndDrawer component.
 */
import { CSSProperties, useState } from 'react';
import MyFloatButton from '../forModal/FloatButton';
import ChatDrawer from './chatDrawer';
import { FaRobot } from 'react-icons/fa';

export type ChatButtonAndDrawerPropsType = {
  style?: CSSProperties;
  //  category?:categories
};

const ChatButtonAndDrawer: React.FC<ChatButtonAndDrawerPropsType> = ({ style }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <MyFloatButton
        onClick={toggleDrawer}
        toolTip={`Click to ${isDrawerOpen ? 'close' : 'open'} chatbot`}
        icon={<FaRobot />}
        style={{ position: 'relative', ...style }}
      />
      <ChatDrawer open={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default ChatButtonAndDrawer;
