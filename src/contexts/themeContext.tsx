'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const pathname = usePathname();
  const name = useSearchParams().get('name');
  const router = useRouter();
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const fullPath = `${pathname}?name=${name}&theme=${newTheme}`;
    console.log(fullPath);
    if (pathname.includes('category')) {
      // console.log(fullPath);
      router.push(fullPath);
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (theme) {
    return theme;
  } else {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
};
