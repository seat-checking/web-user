import { axiosWithAuth, getApiUrl } from 'api/common';

import axios from 'axios';
import type { SuccessOkResponse } from 'api/common';
import type {
  StoreDetaillParams,
  StoreDetaillResponse,
  StoreListParams,
  StoreListResponse,
  StoreSearchParams,
} from 'api/store/common';

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
