import '@ant-design/v5-patch-for-react-19';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/themeContext';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Layout } from 'antd';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Track all your expenses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}>
        <ThemeProvider>
          <Layout className="h-screen flex flex-col flex-1">
            <Header />
            {children}
            <Footer />
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
