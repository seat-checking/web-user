import type { Token } from 'models/auth';

export const getAuth = (): Partial<Token> => {
  return {
    accessToken: localStorage.getItem('accessToken') || undefined,
    refreshToken: localStorage.getItem('refreshToken') || undefined,
  };
};

export const setAuth = (newAuth: Token) => {
  localStorage.setItem('accessToken', newAuth.accessToken);
  localStorage.setItem('refreshToken', newAuth.refreshToken);
};
