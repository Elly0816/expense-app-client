# Expense Tracker

A modern, full-featured expense tracking application built with **Next.js**, **React**, **TypeScript**, and **Ant Design**. This project is designed to help users efficiently manage, categorize, and analyze their expenses with a beautiful and responsive user interface. The app supports secure authentication via Google OAuth and provides real-time updates using TanStack React Query.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Google OAuth Authentication:** Secure sign-in and session management using Google accounts.
- **Dark/Light Theme Support:** Instantly toggle between light and dark modes for accessibility and user preference.
- **Category-Based Expense Management:** Organize expenses into pre-defined categories such as Food & Drinks, Groceries, Shopping, Transport, Entertainment, Utilities, Health & Fitness, Home, Savings, and Education.
- **Responsive UI:** Built with Ant Design and custom theming for a seamless experience across devices.
- **Real-Time Data Updates:** Uses TanStack React Query for efficient data fetching, caching, and UI updates.
- **TypeScript Strictness:** Strong typing throughout the codebase for reliability and maintainability.
- **Reusable Components:** Modular React components for cards, modals, forms, and more.
- **API Integration:** Connects to a Bun/Hono/Drizzle/Redis-powered backend for persistent, secure data storage and retrieval.
- **Expense CRUD Operations:** Add, view, and delete expenses with instant feedback.
- **User Context & Theme Context:** Global state management for authentication and theming.

---

## Architecture

This project is the **client-side** of a full-stack expense tracking solution. It communicates with a backend server (see `expense-app-server`) via RESTful APIs. The client is built with Next.js (App Router), React 19, and leverages Ant Design for UI and TanStack React Query for data management.

- **Frontend:** Next.js, React, TypeScript, Ant Design, TailwindCSS, React Query
- **Backend:** Bun, Hono, Drizzle ORM, PostgreSQL, Redis (see separate server repo)
- **Authentication:** Google OAuth 2.0

---

## Project Structure

```
expense-app-client/
├── src/
│   ├── api/           # API integration modules (Axios)
│   ├── app/           # Next.js pages and routes (App Router)
│   ├── components/    # Reusable UI components (Cards, Modals, Forms, etc.)
│   ├── contexts/      # React contexts (auth, theme)
│   ├── hooks/         # Custom React hooks (React Query, etc.)
│   ├── utilities/     # Utility functions and constants
│   └── constants.ts   # Application-wide constants
├── public/            # Static assets (images, etc.)
├── styles/            # Global and component styles (Tailwind, CSS)
├── package.json
├── tsconfig.json
└── README.md
```

---

## Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/expense-app-client.git
   cd expense-app-client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and set the following variables as needed:

   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
   # ...other variables as required
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open the app:**

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

- `NEXT_PUBLIC_API_BASE_URL`: The base URL for the backend API (default: `http://localhost:8080`)
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`: Google OAuth client ID
- Additional variables as required for authentication and API integration.

---

## Technologies Used

- **Next.js 15.x**: React framework for server-side rendering and routing.
- **React 19.x**: Modern UI library for building interactive interfaces.
- **TypeScript**: Static type checking for safer, more robust code.
- **Ant Design 5.x**: Enterprise-class UI component library.
- **TanStack React Query 5.x**: Powerful data fetching and caching.
- **Axios**: Promise-based HTTP client for API requests.
- **TailwindCSS 4.x**: Utility-first CSS framework for rapid UI development.
- **React Icons**: Icon library for React.
- **Custom Contexts**: For authentication and theming.

---

## Development

- Uses **turbopack** for fast development builds.
- Hot reloading and instant feedback for UI changes.
- Modular and scalable codebase for easy feature addition.

**Start the dev server:**

```bash
npm run dev
```

---

## Contributing

Pull requests and issues are welcome! Please ensure your code is well-tested and follows the project's TypeScript and formatting guidelines.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## License

**Author:** Eleazar  
**License:** MIT

---

Enjoy building and managing your expenses with Expense Tracker!
