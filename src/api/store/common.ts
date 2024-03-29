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
  telNum: string;
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

export interface SpaceType {
  storeSpaceId: number;
  name: string;
}

interface Chair {
  i: number;
  manageId: number;
  x: number;
  y: number;
}

interface Table {
  i: number;
  w: number;
  h: number;
  x: number;
  y: number;
}

export interface ReservationUnit {
  chair: boolean;
  space: boolean;
}
export interface GetShopLayoutResponse {
  storeSpaceId: number;
  storeSpaceName: string;
  reservationUnit: ReservationUnit;
  height: number;
  tableList: Table[];
  chairList: Chair[];
}

export interface GetCurrentlyInUseResponse {
  isThisSpaceCurrentlyInUse: boolean;
  allChairsCurrentlyInUse: {
    id: number;
  }[];
}

export interface GetSeatStatisticsResponse {
  totalNumberOfSeats: number;
  numberOfRemainingSeats: number;
  averageSeatUsageMinute: number;
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
