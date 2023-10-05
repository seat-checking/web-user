export interface StoreUser {
  id: number;
  name: string;
  introduction: string;
  location: string;
  mainImage: string;
  isOpen: boolean;
}

export interface StoreListResponse {
  curCount: number;
  curPage: number;
  totalCount: number;
  totalPage: number;
  storeResponseList: StoreUser[];
}

export interface StoreDetaillResponse {
  id: number;
  storeName: string;
  address: string;
  detailAddress: string;
  introduction: string;
  category: string;
  mainImage: string;
  monOpenTime: string;
  monCloseTime: string;
  tueOpenTime: string;
  tueCloseTime: string;
  wedOpenTime: string;
  wedCloseTime: string;
  thuOpenTime: string;
  thuCloseTime: string;
  friOpenTime: string;
  friCloseTime: string;
  satOpenTime: string;
  satCloseTime: string;
  sunOpenTime: string;
  sunCloseTime: string;
  dayOff: string[];
}
export interface StoreListParams {
  category?: '음식점' | '카페' | '모임';
  page?: number;
  size?: number;
  sort?: string;
}
export interface StoreSearchParams {
  name: string;
  page?: number;
  size?: number;
  sort?: string;
}

export interface StoreDetaillParams {
  id: number;
}
