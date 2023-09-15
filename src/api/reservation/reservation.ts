import { axiosWithAuth, getApiUrl } from 'api/common';
import type { SuccessOkResponse } from 'api/common';
import type {
  ReservationListResponse,
  UseReservationListResponse,
} from 'api/reservation/common';

interface ReservationListParams {
  reservationStatus?: '대기' | '취소' | '승인' | '거절';
  page?: number;
  size?: number;
  sort?: string;
}

interface UseReservationListParams {
  page?: number;
  size?: number;
  sort?: string;
}

export const getReservationList = async (
  params: ReservationListParams,
): Promise<SuccessOkResponse<ReservationListResponse>> => {
  const url = getApiUrl('/reservations/users/my-list');
  const response = await axiosWithAuth.get(url, {
    params,
  });
  return response.data;
};

export const reservationCancel = async (
  reservationId: number,
): Promise<SuccessOkResponse<ReservationListResponse>> => {
  const url = getApiUrl(`/reservations/users/${reservationId}`);
  const response = await axiosWithAuth.delete(url);
  return response.data;
};

export const getUseReservationList = async (
  params: UseReservationListParams,
): Promise<SuccessOkResponse<UseReservationListResponse>> => {
  const url = getApiUrl('/walk-in/users/my-list');
  const response = await axiosWithAuth.get(url, {
    params,
  });
  return response.data;
};
