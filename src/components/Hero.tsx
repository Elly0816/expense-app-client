/**
 * Module: src/components/Hero.tsx
 *
 *
 * Purpose: Hero section of the homepage
 *
 */

import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Flex, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Flex
      style={{
        backgroundImage: 'url(./hero.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // marginBottom: '1rem',
        // padding: '2rem',
      }}
      className="rounded-lg w-full h-2/6 lg:h-full items-start justify-end "
      vertical
    >
      <div className="pt-8 px-4 mb-4">
        <h1
          style={{
            color: COLORS[theme].textHeading,
            //   fontSize: '3rem',
          }}
          // level={3}
          className="text-lg lg:text-5xl font-bold"
        >
          Track, manage, and master your money effortlessly.
        </h1>
        <Paragraph
          style={{ marginTop: '1rem', color: COLORS[theme].textHeading, maxLines: 2 }}
          ellipsis={{ rows: 2 }}
          className="text-base lg:text-9xl font-light lg:font-bold"
        >
          Xpense helps you stay on top of your spending with clear insights, smart budgets, and
          real-time tracking that puts you in control. No spreadsheets, no guesswork — just a simple
          way to see where your money goes and how to make it work for you.
        </Paragraph>
      </div>
    </Flex>
  );
};

export default Hero;
