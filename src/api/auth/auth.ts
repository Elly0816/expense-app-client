import api from '../baseUrl';

export const authApi = {
  loginWithGoogle: async () => {
    window.location.href = `${api.defaults.baseURL}/auth/google`;
    // api.get(`${api.defaults.baseURL}/auth/google`);
  },
};
