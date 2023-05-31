import axios from 'axios';

import { HOST } from './common';
import type {
  SuccessOkResponse,
  SuccessOkWithoutResultResponse,
} from './common';

interface ValidateNicknameParams {
  nickname: string;
}

interface ValidateEmailParams {
  email: string;
}

interface LoginParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  nickname: string;
  age: number;
  sex: string;
  consentToMarketing: boolean;
  consentToTermsOfUser: boolean;
}

interface ValidateNicknameResult {
  isValid: boolean;
}

interface ValidateEmailResult {
  isValid: boolean;
}

export const validateNickname = async (
  params: ValidateNicknameParams,
): Promise<SuccessOkResponse<ValidateNicknameResult>> => {
  const response = await axios.post(
    `${HOST}/v1/users/validate/nickname`,
    params,
  );
  return response.data;
};

export const validateEmail = async (
  params: ValidateEmailParams,
): Promise<SuccessOkResponse<ValidateEmailResult>> => {
  const response = await axios.post(`${HOST}/v1/users/validate/email`, params);
  return response.data;
};

export const signUp = async (
  params: SignUpParams,
): Promise<SuccessOkWithoutResultResponse> => {
  const response = await axios.post(`${HOST}/v1/users/sign-up`, params); // TODO: 요청 데이터를 담아야 함
  return response.data;
};

export const login = async (
  params: LoginParams,
): Promise<SuccessOkWithoutResultResponse> => {
  const response = await axios.post(`${HOST}/v1/users/sign-in`, params);
  return response.data;
};
