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

export interface StoreDetaillResponse {
  id: 0;
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
