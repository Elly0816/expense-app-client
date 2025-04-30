# Expense Tracker

A modern expense tracking application built with Next.js that allows users to manage and categorize their expenses with Google authentication.

## Features

- Google OAuth authentication
- Dark/light theme support
- Category-based expense management
- Responsive design with Ant Design components
- Real-time data updates with React Query
- TypeScript for type safety

## Key Components

- **Authentication**: Secure Google OAuth integration with protected routes
- **Categories**: Pre-defined expense categories including:
  - Food & Drinks
  - Groceries
  - Shopping
  - Transport
  - Entertainment
  - Utilities
  - Health & Fitness
  - Home
  - Savings
- **Expense Management**: Add, view, and categorize expenses with amounts and dates
- **Theme Support**: Toggle between light and dark modes for better user experience

## Project Structure

```
expense-app-client/
├── src/
│   ├── api/           # API integration modules
│   ├── app/           # Next.js pages and routes
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React contexts (auth, theme)
│   └── constants.ts   # Application constants
```

## Setup

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

2. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies

- Next.js 15.x
- React 19.x
- TypeScript
- Ant Design 5.x
- TanStack Query (React Query) 5.x
- Axios
- TailwindCSS

## Development

The project uses turbopack for faster development builds. Run the development server with:

```bash
npm run dev
```

## Environment Setup

Ensure you have Node.js installed and configure your environment variables for:

- Google OAuth credentials
- API base URL
- Other required environment variables
