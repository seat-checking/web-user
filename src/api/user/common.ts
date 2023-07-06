export const HOST = process.env.REACT_APP_API_URL;
// 프로젝트에 .env 파일을 만들어서 이 파일 안에 보안상 중요한 정보 & 상황에 따라 바뀔 수 있는 값을 따로 빼내서 관리하는 방법
// dotenv -> 위 방법을 도와주는 라이브러리

/**
 * 200 응답 구조
 *
 * result 값이 존재하지 않음
 */
export interface SuccessOkWithoutResultResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  status: number;
}

/**
 * 200 응답 구조
 *
 * result 값이 존재
 */
export interface SuccessOkResponse<T> extends SuccessOkWithoutResultResponse {
  result: T;
}
