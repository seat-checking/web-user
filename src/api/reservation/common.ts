export interface ReservationListResponse {
  content: ReservationUser[];
  page: number;
  size: number;
  hasNext: boolean;
}
export interface ReservationUser {
  reservationId: number;
  storeName: string;
  reservationUnitReservedByUser: string;
  storeSpaceName: string;
  reservedPlace: string;
  startSchedule: string;
  endSchedule: string;
  storeMainImage: string;
  userNickname: string;
}

export interface UseReservationListResponse {
  content: UseReservationUser[];
  page: number;
  size: number;
  hasNext: boolean;
}

export interface UseReservationUser {
  id: number;
  storeName: string;
  storeSpaceName: string;
  walkInUnitWalkedInByUser: string;
  walkedInPlace: string;
  startSchedule: string;
  endSchedule: string;
  createdAt: string;
  storeMainImage: string;
  userNickname: string;
}

export interface SpaceReservationListResponse {
  content: SpaceReservationList[];
  page: number;
  size: number;
  hasNext: boolean;
}

export interface SpaceReservationList {
  id: 0;
  storeName: string;
  storeSpaceName: string;
  startSchedule: string;
  endSchedule: string;
  createdAt: string;
  storeMainImage: string;
  userNickname: string;
}
