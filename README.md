# Expense App Client

## Overview

The expense-app-client is a Next.js-based frontend that offers a responsive UI for tracking and managing expenses. It uses Ant Design for user-friendly components, React Query for efficient data management, and TailwindCSS to enhance styling and theming.

## Features

- Responsive design with Next.js and Ant Design
- Dark/light mode toggling using a custom theme context
- Dynamic display of expense categories and detailed expense tracking
- Modal forms for adding new expenses
- Data fetching and caching with React Query

## Setup

1. Install dependencies using your preferred package manager:
   ```bash
   bun install
   ```
   or
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
2. Run the development server:
   ```bash
   bun dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- **app/**: Next.js pages and route components
- **components/**: Reusable UI components including headers, modals, and cards
- **contexts/**: Theme context for managing dark/light mode
- **hooks/**: Custom hooks for data fetching and state management
- **api/**: Modules for API interactions using Axios

## Technologies Used

- Next.js and React
- TypeScript
- Ant Design for UI components
- TailwindCSS for utility-first styling
- React Query for server state management
- Axios for API calls

Feel free to explore and customize the client as needed!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
