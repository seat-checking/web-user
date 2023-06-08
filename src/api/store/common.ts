// TODO: extract tp .env

const DOMAIN = 'https://9875-211-38-162-27.ngrok-free.app/api';

/**
 * api path를 이용해서 full url로만듬
 * @param path '/v1'로 시작하는 url경로
 * @returns domain이 포함된 full url
 */
export const getApiUrl = (path: string) => {
  return DOMAIN + path;
};

export interface SuccessOkWithoutResultResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  timestamp: string;
  status: number;
}

export interface SuccessOkResponse<T> extends SuccessOkWithoutResultResponse {
  result: T;
}
