import { MessageType } from '@/app/typedefs/types';
import api from '../baseUrl';

export type chatItem = {
  content: string;
  role: 'assistant' | 'user';
};

export type chatReturnType = {
  response: chatItem;
};

export const chat: (item: MessageType) => Promise<chatReturnType> = async ({ message }) => {
  const response = await api.post('/chat', { query: message }, { timeout: 10000 });

  const data = response.data;

  return data as chatReturnType;
};
