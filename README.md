# Expense Tracker

A modern expense tracking application built with Next.js, React, and Ant Design. This app allows users to securely manage and categorize their expenses, supporting Google authentication and real-time updates.

## Features

- **Google OAuth authentication** for secure sign-in
- **Dark/light theme support** with instant toggle
- **Category-based expense management** (Food & Drinks, Groceries, Shopping, Transport, Entertainment, Utilities, Health & Fitness, Home, Savings)
- **Responsive UI** using Ant Design components
- **Real-time data updates** with TanStack React Query
- **TypeScript** for type safety and maintainability

## Key Components

- **Authentication**: Google OAuth integration with protected routes and session management
- **Categories**: Pre-defined categories, each with an icon and amount
- **Expense Management**: Add, view, and categorize expenses with amounts and dates
- **Theme Support**: Toggle between light and dark modes for accessibility

## Project Structure

```
expense-app-client/
├── src/
│   ├── api/           # API integration modules
│   ├── app/           # Next.js pages and routes
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React contexts (auth, theme)
│   ├── utilities/     # Utility functions and constants
│   └── constants.ts   # Application constants
```

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) **in your browser**

## Technologies Used

- Next.js 15.x
- React 19.x
- TypeScript
- Ant Design 5.x
- TanStack Query (React Query) 5.x
- Axios
- TailwindCSS

## Development

The project uses **turbopack** for fast development builds. Start the dev server with:

```bash
npm run dev
```

## Environment Setup

Ensure you have Node.js installed and configure your environment variables for:

- Google OAuth credentials
- API base URL
- Any other required environment variables

---

**Author:** Eleazar  
**License:** MIT
