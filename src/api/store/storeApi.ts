import { axiosWithAuth } from 'api/common';
import { getApiUrl } from 'api/store/common';
import axios from 'axios';
import type { SuccessOkResponse } from 'api/store/common';

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

export interface StoreUser {
  id: number;
  name: string;
  introduction: string;
  location: string;
  mainImage: string;
  open: boolean;
}

export interface StoreListResponse {
  curCount: number;
  curPage: number;
  totalCount: number;
  totalPage: number;
  storeResponseList: StoreUser[];
}

interface StoreDetaillParams {
  id: number;
}

export interface StoreDetaillResponse {
  id: number;
  name: string;
  location: string;
  introduction: string;
  category: string;
  telNum: string;
  mainImage: string | null;
  monOpenTime: string;
  monCloseTime: string;
  tueOpenTime: string;
  tueCloseTime: string;
  wedOpenTime: string;
  webCloseTime: string | null;
  thuOpenTime: string;
  thuCloseTime: string;
  friOpenTime: string;
  friCloseTime: string;
  satOpenTime: string | null;
  satCloseTime: string | null;
  sunOpenTime: string | null;
  sunCloseTime: string | null;
  dayOff: string[];
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
  const url = getApiUrl('/users/stores/list');
  const response = await axiosWithAuth.get(url, {
    params,
  });
  return response.data;
};

export const getSeachList = async (
  params: StoreSearchParams,
): Promise<SuccessOkResponse<StoreListResponse>> => {
  const url = getApiUrl('/users/stores/search/name');
  const response = await axios.get(url, {
    params,
  });
  return response.data;
};

export const getStoreDetaill = async (
  params: StoreDetaillParams,
): Promise<SuccessOkResponse<StoreDetaillResponse>> => {
  const url = getApiUrl(`/users/stores/${params.id}`);
  const response = await axios.get(url, {
    params,
  });
  return response.data;
};
