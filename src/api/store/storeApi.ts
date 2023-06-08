import { getApiUrl } from 'api/store/common';
import axios from 'axios';
import type { SuccessOkResponse } from 'api/store/common';

interface StoreListParams {
  category: 'NONE' | 'RESTAURANT' | 'CAFE' | 'SPACE';
}
interface StoreSearchParams {
  name: string;
}

export interface StoreUser {
  name: string;
  introduction: string;
  location: string;
  mainImage: string;
}
interface StoreListResponse {
  count: number;
  storeList: StoreUser[];
}

export class StoreUserApi {
  static async getList(
    params: StoreListParams,
  ): Promise<SuccessOkResponse<StoreListResponse>> {
    const url = getApiUrl('/v1/users/stores/list');
    const response = await axios.get(url, {
      params,
    });

    return response.data;
  }
}

export const getStoreList = async (
  params: StoreListParams,
): Promise<SuccessOkResponse<StoreListResponse>> => {
  const url = getApiUrl('/v1/users/stores/list');
  const response = await axios.get(url, {
    params,
  });
  return response.data;
};

export const getSeachList = async (
  params: StoreSearchParams,
): Promise<SuccessOkResponse<StoreListResponse>> => {
  const url = getApiUrl('/v1/users/stores/list/name');
  const response = await axios.get(url, {
    params,
  });
  return response.data;
};
