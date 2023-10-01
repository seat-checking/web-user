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
