import axios from 'axios';
import { getAuth, setAuth } from 'utils/auth';
import type { Token } from 'models/auth';

export const axiosWithAuth = axios.create({
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
    console.log('response.headers2 :>> ', response.headers.authorization);
    if (response.headers.authorization) {
      console.log('토큰 만료!!!!!!!!!');
      setAuth(response.headers.authorization);
      axios.defaults.headers.common.Authorization =
        response.headers.authorization;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
