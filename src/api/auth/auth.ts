/**
 * Module: src/api/auth/auth.ts
 * Purpose: Authentication related API helpers.
 * Exports: authApi — helper functions that start login flows or call auth endpoints.
 * Notes: loginWithGoogle redirects the browser to the server OAuth endpoint.
 */
import api from '../baseUrl';

export const authApi = {
  loginWithGoogle: async () => {
    window.location.href = `${api.defaults.baseURL}/auth/google`;
    // api.get(`${api.defaults.baseURL}/auth/google`);
  },
};
