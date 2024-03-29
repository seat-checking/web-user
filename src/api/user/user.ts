import {
  getApiUrl,
  type SuccessOkResponse,
  type SuccessOkWithoutResultResponse,
} from 'api/common';
import axios from 'axios';
import type {
  LoginParams,
  SignUpParams,
  ValidateEmailParams,
  ValidateEmailResult,
  ValidateLoginResult,
  ValidateNicknameParams,
  ValidateNicknameResult,
} from 'api/user/common';

export const validateNickname = async (
  params: ValidateNicknameParams,
): Promise<SuccessOkResponse<ValidateNicknameResult>> => {
  const url = getApiUrl('/users/validate/nickname');
  const response = await axios.post(url, params);
  return response.data;
};

export const validateEmail = async (
  params: ValidateEmailParams,
): Promise<SuccessOkResponse<ValidateEmailResult>> => {
  const url = getApiUrl('/users/validate/email');
  const response = await axios.post(url, params);
  return response.data;
};

export const signUp = async (
  params: SignUpParams,
): Promise<SuccessOkWithoutResultResponse> => {
  const url = getApiUrl('/users/sign-up');
  const response = await axios.post(url, params);
  return response.data;
};

export const login = async (
  params: LoginParams,
): Promise<SuccessOkResponse<ValidateLoginResult>> => {
  const url = getApiUrl('/users/sign-in');
  const response = await axios.post(url, params, {
    withCredentials: true,
  });
  return response.data;
};
