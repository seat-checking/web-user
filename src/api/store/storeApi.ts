import { getApiUrl } from 'api/store/common';
import axios from 'axios';
import type { SuccessOkResponse } from 'api/store/common';

interface StoreListParams {
  category: 'NONE' | 'RESTAURANT' | 'CAFE' | 'SPACE';
  page?: number;
  size?: number;
}
interface StoreSearchParams {
  name: string;
}

export interface StoreUser {
  id: number;
  name: string;
  introduction: string;
  location: string;
  mainImage: string;
}
export interface StoreListResponse {
  curCount: number;
  curPage: number;
  totalCount: number;
  totalPage: number;
  storeList: StoreUser[];
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
  const response = await axios.get(url, {
    params,
  });
  return response.data;
};

export const getSeachList = async (
  params: StoreSearchParams,
): Promise<SuccessOkResponse<StoreListResponse>> => {
  const url = getApiUrl('/users/stores/list/name');
  const response = await axios.get(url, {
    params,
  });
  return response.data;
};
