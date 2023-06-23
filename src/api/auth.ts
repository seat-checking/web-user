import { axiosInstance, axiosWithAuth } from './common';
import type { Profile, Token } from 'models/auth';

export const login = async (
  email: string,
  password: string,
): Promise<Token> => {
  const { data } = await axiosInstance.post('/v1/auth/login', {
    email,
    password,
  });
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
  };
};

export const getProfile = async (): Promise<Profile> => {
  const { data } = await axiosWithAuth.get('/v1/auth/profile');
  return data;
};
