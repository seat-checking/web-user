import { axiosWithAuth, getApiUrl } from 'api/common';

import type {
  SuccessOkResponse,
  SuccessOkWithoutResultResponse,
} from 'api/common';
import type {
  ReservationListResponse,
  ReservationResponse,
  StoreCustomReservationResponse,
} from 'api/reservation/common';

interface ReservationListParams {
  'reservation-status'?: '대기' | '취소' | '승인' | '거절';
  page?: number;
  size?: number;
  sort?: string;
}
export interface GetRequestInformationParams {
  storeId: string;
}

export interface SeatScheduleParams {
  storeChairId: number;
  startSchedule: string;
  endSchedule: string;
  customUtilizationContents: {
    fieldId: number;
    content: string[];
  }[];
}
export interface SpaceScheduleParams {
  storeSpaceId: number;
  startSchedule: string;
  endSchedule: string;
  customUtilizationContents: {
    fieldId: number;
    content: string[];
  }[];
}

export interface ReservationParams {
  'reservation-date-and-time': string;
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

export const getRequestInformation = async (
  Params: GetRequestInformationParams,
): Promise<SuccessOkResponse<StoreCustomReservationResponse>> => {
  const url = getApiUrl(
    `/stores/admins/custom-utilization-field/${Params.storeId}`,
  );
  const response = await axiosWithAuth.get(url);

  return response.data;
};

export const chairNowUse = async (
  params: SeatScheduleParams,
): Promise<SuccessOkWithoutResultResponse> => {
  const url = getApiUrl('/walk-in/users/chair');
  const response = await axiosWithAuth.post(url, params);
  return response.data;
};
export const chairReservation = async (
  params: SeatScheduleParams,
): Promise<SuccessOkWithoutResultResponse> => {
  const url = getApiUrl('/reservations/users/chair');
  const response = await axiosWithAuth.post(url, params);
  return response.data;
};

export const getSeatReservations = async (
  chairIdToReservation: number,
  params: ReservationParams,
): Promise<SuccessOkResponse<ReservationResponse>> => {
  const url = getApiUrl(
    `/reservations/users/reserved-list/chair/date/${chairIdToReservation}`,
  );
  const response = await axiosWithAuth.get(url, { params });
  return response.data;
};

export const SpaceNowUse = async (
  params: SpaceScheduleParams,
): Promise<SuccessOkWithoutResultResponse> => {
  const url = getApiUrl('/walk-in/users/space');
  const response = await axiosWithAuth.post(url, params);
  return response.data;
};
export const SpaceReservation = async (
  params: SpaceScheduleParams,
): Promise<SuccessOkWithoutResultResponse> => {
  const url = getApiUrl('/reservations/users/space');
  const response = await axiosWithAuth.post(url, params);
  return response.data;
};

export const getSpaceReservations = async (
  spaceIdToReservation: number,
  params: ReservationParams,
): Promise<SuccessOkResponse<ReservationResponse>> => {
  const url = getApiUrl(
    `/reservations/users/reserved-list/space/date/${spaceIdToReservation}`,
  );
  const response = await axiosWithAuth.get(url, { params });
  return response.data;
};
