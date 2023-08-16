import { axiosWithAuth, getApiUrl } from 'api/common';

import axios from 'axios';
import type { SuccessOkResponse } from 'api/common';
import type { StoreDetaillResponse, StoreListResponse } from 'api/store/common';

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
