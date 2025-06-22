import { AUTH_VALUE } from '@/constants';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

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

//Send the token from localStorage as the Authorization header upon each request.
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    let authHeaderValue;
    if (typeof window !== 'undefined') {
      authHeaderValue = localStorage.getItem(AUTH_VALUE) as string;
    }
    config.headers.authorization = `Bearer ${authHeaderValue}`;

    return config;
  },
  (error) => {
    console.error(`There was an error with sending the request in the interceptor: ${error}`);
  }
);

api.interceptors.response.use((response: AxiosResponse) => {
  const authHeader = response.headers['authorization'];

  if (authHeader) {
    console.log(`Here is the authorization header: ${authHeader}`);

    localStorage.setItem(AUTH_VALUE, authHeader);
  }

  if (response.data.redirectTo) {
    window.location.href = response.data.redirectTo;
  }

  return response;
});

export default api;
