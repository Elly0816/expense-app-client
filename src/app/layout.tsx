import '@ant-design/v5-patch-for-react-19';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/themeContext';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { AuthProvider } from '@/contexts/authContext';

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen min-h-screen`}
      >
        <AuthProvider>
          <ThemeProvider>
            <Layout className="h-screen flex flex-col flex-1 ">
              <Header />
              <Content style={{ minHeight: 'fit-content' }}>{children}</Content>
              <Footer />
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
