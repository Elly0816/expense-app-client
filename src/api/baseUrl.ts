import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_API_URL
      : 'http://localhost:8080',
  // baseURL: 'http://localhost:8080',
  // baseURL: 'https://expense-app-server-1.onrender.com',
  timeout: 1000,
  withCredentials: true,
});

export default api;
