import { ReactNode } from 'react';
import {
  MdOutlineFlatware,
  MdOutlineLocalGroceryStore,
  MdOutlineLocalMovies,
  MdOutlinePower,
} from 'react-icons/md';
import {
  AiOutlineBank,
  AiOutlineCar,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShopping,
} from 'react-icons/ai';

const cats: { title: string; amount: number; icon?: ReactNode }[] = [
  {
    title: 'Food & Drinks',
    amount: 23,
    icon: <MdOutlineFlatware />,
  },
  {
    title: 'Groceries',
    amount: 14,
    icon: <MdOutlineLocalGroceryStore />,
  },

  {
    title: 'Shopping',
    amount: 10,
    icon: <AiOutlineShopping />,
  },
  {
    title: 'Transport',
    amount: 25,
    icon: <AiOutlineCar />,
  },
  {
    title: 'Entertainment',
    amount: 25,
    icon: <MdOutlineLocalMovies />,
  },
  {
    title: 'Utilities',
    amount: 25,
    icon: <MdOutlinePower />,
  },
  {
    title: 'Health & Fitness',
    amount: 25,
    icon: <AiOutlineHeart />,
  },
  {
    title: 'Home',
    amount: 25,
    icon: <AiOutlineHome />,
  },
  {
    title: 'Savings',
    amount: 25,
    icon: <AiOutlineBank />,
  },
];

export default cats;
