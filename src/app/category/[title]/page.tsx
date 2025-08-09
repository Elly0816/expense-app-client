'use client';
import '@ant-design/v5-patch-for-react-19';

import { ReactNode, useCallback, useState } from 'react';
// import { cookies } from 'next/headers';
import { COLORS } from '@/Colors';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Category from '@/components/categoryPage/Category';
import {
  AuthenticatedType,
  categories,
  EditExpenseReturnType,
  ExpenseType,
} from '@/app/typedefs/types';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { getExpenseById } from '@/api/expenses/expenses';
import { EditContextProvider } from '@/contexts/editExpenseContext';
import UtilityButtonsContainer from '@/components/UtilityButtonsContainer';

export const dynamic = 'force-dynamic';

// const items: CategoryItem[] = [
//   { key: '1', date: new Date(), amount: 15, expense: 'Something Nice' },
//   { key: '2', date: new Date(), amount: 25, expense: 'Another nice thing' },
// ];

export type searchParamsType = {
  name: categories;
  theme: 'light' | 'dark';
};

export default function Page(): ReactNode {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') as searchParamsType['name'];
  const theme = searchParams.get('theme') as searchParamsType['theme'];
  //console.log(theme);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idOfExpenseToGet, setIdOfExpenseToGet] = useState<number>();

  const getInfoForEdit: (id: number) => void = useCallback(
    (id) => {
      setIsModalOpen(true);
      setIdOfExpenseToGet(id);
      console.log('Getting info');
    },
    [setIdOfExpenseToGet, setIsModalOpen]
  );

  const expenseWithId: () => Promise<EditExpenseReturnType | AuthenticatedType> = useCallback(
    () => getExpenseById({ id: idOfExpenseToGet as number }),
    [idOfExpenseToGet]
  );

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.expenseById, idOfExpenseToGet],
    queryFn: expenseWithId,
    enabled: !!isModalOpen && !!idOfExpenseToGet,
  });

  return (
    <Flex
      // className="flex-1 flex"
      style={{
        backgroundColor: COLORS[theme].background,
        color: COLORS[theme].textBody,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: '100%',
      }}
    >
      <Title style={{ color: COLORS[theme].textHeading, marginLeft: 50, marginTop: 10 }} level={2}>
        {name}
      </Title>
      <EditContextProvider
        loading={isLoading}
        expense={
          (data as EditExpenseReturnType)?.expense
            ? ((data as EditExpenseReturnType).expense as unknown as ExpenseType)
            : undefined
        }
      >
        {/* <h3>Hi</h3> */}
        {/* <FloatAndModal
          setModalFromParent={setIsModalOpen}
          isModalOpenedFromParent={isModalOpen}
          categories={name}
        /> */}
        <UtilityButtonsContainer
          forModal={{
            setModalFromParent: setIsModalOpen,
            isModalOpenedFromParent: isModalOpen,
            categories: name,
          }}
          forDrawer={{ category: name }}
          forChat={{}}
        />
      </EditContextProvider>
      {/* <ButtonAndDrawer category={name} /> */}
      <Category getInfoForEdit={getInfoForEdit} category={name} />
    </Flex>
  );
}
