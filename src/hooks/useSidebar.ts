import { useState } from 'react';

const useSidebar: () => {
  isSidebarOpen: boolean;
  handleShowSidebar: () => void;
  handleHideSidebar: () => void;
} = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleShowSidebar = () => {
    setIsSidebarOpen(true);
    console.log('show clicked');
  };

  const handleHideSidebar = () => {
    setIsSidebarOpen(false);
    console.log('hide clicked');
  };

  return { isSidebarOpen, handleHideSidebar, handleShowSidebar };
};

export default useSidebar;
