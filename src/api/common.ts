import axios from 'axios';
import { getAuth, removeAuth, setAuth } from 'utils/auth';

// TODO: extract tp .env

const DOMAIN = process.env.REACT_APP_API_URL;

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
  status: number;
}

export interface SuccessOkResponse<T> extends SuccessOkWithoutResultResponse {
  result: T;
}

export interface ErrorResponse {
  success: false;
  code: string;
  message: string;
  status: number;
  errors: [];
}

export const axiosWithAuth = axios.create({
  baseURL: DOMAIN,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosWithAuth.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    // Header에 Authorization 정보로 Access Token을 담아서 보낸다
    if (!config.headers.Authorization) {
      const { accessToken } = getAuth();
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
axiosWithAuth.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      console.log('토큰 만료!!!!!!!!!');
      setAuth({ accessToken: response.headers.authorization });
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      removeAuth();
      window.location.reload();
    }
    return Promise.reject(error);
  },
);
