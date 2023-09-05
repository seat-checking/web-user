import type { Token } from 'models/auth';

export const getAuth = (): Partial<Token> => {
  return {
    accessToken: localStorage.getItem('accessToken') || undefined,
  };
};

export const setAuth = (newAuth: Token) => {
  localStorage.setItem('accessToken', newAuth.accessToken);
};

export const removeAuth = (): void => {
  localStorage.removeItem('accessToken');
};
