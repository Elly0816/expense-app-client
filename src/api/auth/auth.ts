import api from '../baseUrl';

export const authApi = {
  loginWithGoogle: () => {
    window.location.href = `${api.defaults.baseURL}/auth/google`;
  },
};
