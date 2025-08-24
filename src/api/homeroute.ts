/**
 * Module: src/api/homeroute.ts
 * Purpose: Small wrapper for the API call used on the home page.
 * Exports: homeRoute() — fetches server root data used by home UI.
 */
import api from './baseUrl';

export const homeRoute = async () => {
  const { data } = await api.get('/');
  return data;
};
