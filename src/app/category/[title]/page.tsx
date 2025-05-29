'use client';
import '@ant-design/v5-patch-for-react-19';

import { ReactNode } from 'react';
// import { cookies } from 'next/headers';
import { COLORS } from '@/Colors';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import FloatAndModal from '@/components/forModal/FloatandModal';
import Category from '@/components/categoryPage/Category';
import { categories } from '@/app/typedefs/types';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { queryExpenses } from '@/hooks/queryClient';
import { useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic';

// const items: CategoryItem[] = [
//   { key: '1', date: new Date(), amount: 15, expense: 'Something Nice' },
//   { key: '2', date: new Date(), amount: 25, expense: 'Another nice thing' },
// ];

type searchParamsType = {
  name: categories;
  theme: 'light' | 'dark';
};

export default function Page(): ReactNode {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') as searchParamsType['name'];
  const theme = searchParams.get('theme') as searchParamsType['theme'];
  console.log(theme);

  return (
    <QueryClientProvider client={queryExpenses}>
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
        <Category category={name} />
      </Flex>
    </QueryClientProvider>
  );
}
