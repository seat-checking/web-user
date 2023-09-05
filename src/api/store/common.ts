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
