export const QUERY_KEYS = {
  expensesByCategory: ['expensesByCategory'] as const,
  home: ['home'] as const,
  expenses: ['expenses'] as const,
  logout: ['logout'] as const,
  customRange: ['customRange'] as const,
  day: ['day'] as const,
  week: ['week'] as const,
  month: ['month'] as const,
  year: ['year'] as const,
  expenseById: ['id'] as const,
};

export const CHECK_AUTH_INTERVAL = 5 * 60 * 1000;
// export const CHECK_AUTH_INTERVAL = 10 * 1000;

export const AUTH_VALUE = 'authHeader';
