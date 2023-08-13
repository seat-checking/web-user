import { axiosWithAuth } from 'api/common';
import { getApiUrl } from 'api/reservation/common';
import type { SuccessOkResponse } from 'api/reservation/common';

interface ReservationListParams {
  reservationStatus?: '대기' | '취소' | '승인' | '거절';
  page?: number;
  size?: number;
  sort?: string;
}

interface ReservationCancelParams {
  id: number;
}

export interface ReservationUser {
  reservationId: number;
  storeName: string;
  reservationUnitReservedByUser: string;
  storeSpaceName: string;
  reservedPlace: string;
  startSchedule: string;
  endSchedule: string;
  storeMainImage: string;
  userNickname: string;
}

export interface ReservationListResponse {
  content: ReservationUser[];
  page: number;
  size: number;
  hasNext: boolean;
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
