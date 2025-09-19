/**
 * Module: src/components/MenuOptions.tsx.
 * Purpose: Contains the navbar and it's configurations.
 * Exports: Default MenuOptions component.
 *
 */

'use client';

import Link from 'next/link';
import { Typography, Button } from 'antd';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';
import { ThemeToggle } from './Theme';
import SignInModal from './SignInModal';
import { useState } from 'react';
import { FaHamburger, FaWindowClose } from 'react-icons/fa';
import { LogoutButton } from './Logout';

type MenuOptionsTypeProps = {
  isAuth: boolean;
};

type navOptionsType = { title: string; link: string };

const notAuthOptions: navOptionsType[] = [
  {
    title: 'Features',
    link: '',
  },
  {
    title: 'Pricing',
    link: '',
  },
  {
    title: 'Support',
    link: '',
  },
];

const authOptions: navOptionsType[] = [
  {
    title: 'Dashboard',
    link: '',
  },
  {
    title: 'Expenses',
    link: '',
  },
  {
    title: 'Budgets',
    link: '',
  },
  {
    title: 'Reports',
    link: '',
  },
];

const { Link: CustomLink } = Typography;

const MenuOptions: React.FC<MenuOptionsTypeProps> = ({ isAuth }) => {
  const menuOptions = isAuth ? authOptions : notAuthOptions;
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleShowSidebar = () => {
    setIsSidebarOpen(true);
    console.log('show clicked');
  };

  const handleHideSidebar = () => {
    setIsSidebarOpen(false);
    console.log('hide clicked');
  };

  return (
    <>
      {
        //Menu Options that shows as part of the header on larger screens
      }
      <div className="md:flex flex-row justify-between items-center w-3/12 bg-inherit hidden">
        {menuOptions.map((options) => (
          <CustomLink
            key={options.title}
            href={options.link}
            style={{ color: COLORS[theme].textHeading }}
            strong
          >
            {options.title}
          </CustomLink>
        ))}
        {!isAuth && (
          <Button type="primary" onClick={handleOpenModal}>
            Sign In
          </Button>
        )}
        {isAuth && <LogoutButton />}
        <SignInModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
        <ThemeToggle />
      </div>

      {
        //This opens the sidebar
      }
      {!isSidebarOpen && (
        <div className="md:hidden flex flex-col" onClick={handleShowSidebar}>
          {/* <h3>Open</h3> */}
          <FaHamburger style={{ color: COLORS[theme].textHeading }} />
        </div>
      )}
      {
        // Menu Options that show as a sidebar on smaller screens
      }
      <div
        className="md:hidden flex flex-col fixed h-screen right-0 w-1/3 z-50 items-center top-0 gap-5"
        style={{
          paddingBottom: '50%',
          // paddingTop: '20%',
          paddingTop: '5rem',
          backgroundColor: COLORS[theme].background,
          left: `${isSidebarOpen ? '67%' : '100%'}`,
          transition: 'left 0.3s ease',
          borderLeft: `2px solid ${COLORS[theme].border}`,
        }}
      >
        {isSidebarOpen && (
          <div onClick={handleHideSidebar} className="relative bottom-13 right-1/3">
            {/* <h3>Close</h3> */}
            <FaWindowClose style={{ color: COLORS[theme].textHeading }} />
          </div>
        )}
        {menuOptions.map((options) => (
          <CustomLink
            key={options.title}
            href={options.link}
            style={{ color: COLORS[theme].textHeading }}
            strong
          >
            {options.title}
          </CustomLink>
        ))}
        {!isAuth && (
          <Button type="primary" onClick={handleOpenModal}>
            Sign In
          </Button>
        )}
        {isAuth && <LogoutButton />}
        <SignInModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
        <ThemeToggle />
      </div>
    </>
  );
};

export default MenuOptions;
