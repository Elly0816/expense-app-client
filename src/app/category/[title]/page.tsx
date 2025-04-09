'use client';
import '@ant-design/v5-patch-for-react-19';

import { ReactNode } from 'react';
// import { cookies } from 'next/headers';
import { COLORS } from '@/Colors';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import FloatAndModal from '@/components/forModal/FloatandModal';
import Category, { CategoryItem } from '@/components/categoryPage/Category';
import { categories } from '@/app/typedefs/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export const dynamic = 'force-dynamic';

const items: CategoryItem[] = [
  { key: '1', date: new Date(), amount: 15, expense: 'Something Nice' },
  { key: '2', date: new Date(), amount: 25, expense: 'Another nice thing' },
];

type searchParamsType = {
  name: categories;
  theme: 'light' | 'dark';
};

export default function Page({ searchParams }: { searchParams: searchParamsType }): ReactNode {
  const { name, theme } = searchParams;
  // console.log(await params);
  // console.log(await searchParams);
  // const cookieStore = cookies();
  // const theme = ((await cookieStore).get('theme')?.value || 'light') as 'light' | 'dark';
  console.log(theme);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
        <Title
          style={{ color: COLORS[theme].textHeading, marginLeft: 50, marginTop: 10 }}
          level={2}
        >
          {name}
        </Title>
        <FloatAndModal categories={name} />
        <Category items={items} />
      </Flex>
    </QueryClientProvider>
  );
}
