import { axiosWithAuth, getApiUrl } from 'api/common';
import type {
  SuccessOkResponse,
  SuccessOkWithoutResultResponse,
} from 'api/common';
import type {
  SpaceReservationListResponse,
  UseReservationListResponse,
  GetRequestInformationParams,
  ReservationListParams,
  ReservationListResponse,
  ReservationParams,
  ReservationResponse,
  SeatScheduleParams,
  SpaceScheduleParams,
  StoreCustomReservationResponse,
  ParticipationListResponse,
} from 'api/reservation/common';

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

export const getParticipationList = async (
  storeId: number,
  params: UseReservationListParams,
): Promise<SuccessOkResponse<ParticipationListResponse>> => {
  const url = getApiUrl(`/participation/${storeId}/space-participation-list`);
  const response = await axiosWithAuth.get(url, { params });
  return response.data;
};
