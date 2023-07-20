import axios from 'axios';
import { getAuth, setAuth } from 'utils/auth';
import type { Token } from 'models/auth';

const AUTH_TEST_DOMAIN = 'https://api.escuelajs.co/api';

export const axiosInstance = axios.create({
  baseURL: AUTH_TEST_DOMAIN,
});

export const axiosWithAuth = axios.create({
  baseURL: AUTH_TEST_DOMAIN,
  headers: { 'Content-Type': 'application/json' },
});

export const refreshToken = async (): Promise<Token> => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { refreshToken } = getAuth();
  const { data } = await axiosInstance.post('/v1/auth/refresh-token', {
    refreshToken,
  });
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
  };
};

axiosWithAuth.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    // Header에 Authorization 정보로 Access Token을 담아서 보낸다
    if (!config.headers.Authorization) {
      const { accessToken } = getAuth();
      config.headers.Authorization = `Bearer ${accessToken}`;
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
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async (error) => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    // TODO: 응답이 403이 왔을 때, refresh API 요청하고, 직전에 실패했던 API를 재요청한다
    const prevRequest = error.config;

    if (error.response.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      const token = await refreshToken();
      setAuth(token);

      prevRequest.headers.Authorization = `Bearer ${token.accessToken}`;
      return axiosWithAuth(prevRequest);
    }
    return Promise.reject(error);
  },
);
