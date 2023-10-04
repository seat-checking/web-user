import { axiosWithAuth, getApiUrl } from 'api/common';
import type { SuccessOkResponse } from 'api/common';
import type {
  ReservationListResponse,
  SpaceReservationListResponse,
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

export const useReservationCancel = async (
  reservationId: number,
): Promise<SuccessOkResponse<ReservationListResponse>> => {
  const url = getApiUrl(`/reservations/users/${reservationId}`);
  const response = await axiosWithAuth.delete(url);
  return response.data;
};

export const SpaceReservationCancel = async (
  participationId: number,
): Promise<SuccessOkResponse<ReservationListResponse>> => {
  const url = getApiUrl(`/participation/cancel/${participationId}`);
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

export const getUpcomingList = async (
  params: UseReservationListParams,
): Promise<SuccessOkResponse<SpaceReservationListResponse>> => {
  const url = getApiUrl('/participation/my-list/upcoming');
  const response = await axiosWithAuth.get(url, {
    params,
  });
  return response.data;
};

export const getParticipatedList = async (
  params: UseReservationListParams,
): Promise<SuccessOkResponse<SpaceReservationListResponse>> => {
  const url = getApiUrl('/participation/my-list/participated');
  const response = await axiosWithAuth.get(url, {
    params,
  });
  return response.data;
};
