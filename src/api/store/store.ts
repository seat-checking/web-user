import { axiosWithAuth, getApiUrl } from 'api/common';

import axios from 'axios';
import type { SuccessOkResponse } from 'api/common';
import type {
  GetCurrentlyInUseResponse,
  GetSeatStatisticsResponse,
  GetShopLayoutResponse,
  SpaceType,
  StoreDetaillResponse,
  StoreListResponse,
} from 'api/store/common';

interface StoreListParams {
  category?: '음식점' | '카페' | '모임';
  page?: number;
  size?: number;
  sort?: string;
}
interface StoreSearchParams {
  name: string;
  page?: number;
  size?: number;
  sort?: string;
}

interface StoreDetaillParams {
  id: number;
}

export class StoreUserApi {
  static async getList(
    params: StoreListParams,
  ): Promise<SuccessOkResponse<StoreListResponse>> {
    const url = getApiUrl('/users/stores/list');
    const response = await axios.get(url, {
      params,
    });

    return response.data;
  }
}

export const getStoreList = async (
  params: StoreListParams,
): Promise<SuccessOkResponse<StoreListResponse>> => {
  const url = getApiUrl('/stores/users/list');
  const response = await axiosWithAuth.get(url, {
    params,
  });
  return response.data;
};

export const getSeachList = async (
  params: StoreSearchParams,
): Promise<SuccessOkResponse<StoreListResponse>> => {
  const url = getApiUrl('/stores/users/search/name');
  const response = await axiosWithAuth.get(url, {
    params,
  });
  return response.data;
};

export const getStoreDetaill = async (
  params: StoreDetaillParams,
): Promise<SuccessOkResponse<StoreDetaillResponse>> => {
  const url = getApiUrl(`/stores/users/${params.id}`);
  const response = await axiosWithAuth.get(url, {
    params,
  });
  return response.data;
};

// 가게의 모든 스페이스 기본 정보 조회
export const getSpaceList = async (storeId: number): Promise<SpaceType[]> => {
  const response = await axiosWithAuth.get(`/stores/admins/spaces/${storeId}`);
  return response.data.result;
};

// 스페이스별 가게 형태 조회
export const getSpaceLayout = async (
  spaceId: number | null,
): Promise<GetShopLayoutResponse> => {
  const response = await axiosWithAuth.get(`/stores/spaces/seats/${spaceId}`);
  return response.data.result;
};

// 현재 이용 중인 좌석 조회
export const getSeatStatistics = async (
  storeId: number,
): Promise<GetSeatStatisticsResponse> => {
  const response = await axiosWithAuth.get(
    `/stores/seats/statistics_information/${storeId}`,
  );
  return response.data.result;
};

// 가게 좌석 통계 정보 조회
export const getCurrentlyInUse = async (
  spaceId: number,
): Promise<GetCurrentlyInUseResponse> => {
  const response = await axiosWithAuth.get(
    `/utilization/seat/current-in-use/${spaceId}`,
  );
  return response.data.result;
};
