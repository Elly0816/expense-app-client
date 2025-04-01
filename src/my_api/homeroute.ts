import api from './baseUrl';

export const homeRoute = async () => {
  const { data } = await api.get('/');
  return data;
};
