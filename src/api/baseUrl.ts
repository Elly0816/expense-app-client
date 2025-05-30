import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL: 'https://expense-app-server-1.onrender.com',
  timeout: 1000,
  withCredentials: true,
});

export default api;
