import { ReactNode } from 'react';
// import { cookies } from 'next/headers';
import { COLORS } from '@/Colors';

export const dynamic = 'force-dynamic';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ name: string; theme: 'light' | 'dark' }>;
}): Promise<ReactNode> {
  const { name, theme } = await searchParams;
  // console.log(await params);
  console.log(await searchParams);
  // const cookieStore = cookies();
  // const theme = ((await cookieStore).get('theme')?.value || 'light') as 'light' | 'dark';
  console.log(theme);

  return (
    <div
      className="flex-1 flex"
      style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textBody }}
    >
      <h1>My Category: {name}</h1>
    </div>
  );
}
