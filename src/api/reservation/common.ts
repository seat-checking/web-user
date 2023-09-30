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
export interface StoreCustomReservationResponse {
  storeCustomUtilizationFieldList: StoreCustomReservationField[];
}
export interface StoreCustomReservationField {
  id: number;
  title: string;
  type: string;
  contentGuide: string;
}
export interface ReservationResponse {
  allReservationsForSeatAndDate: {
    startSchedule: string;
    endSchedule: string;
  }[];
}

export interface ReservationListParams {
  'reservation-status'?: '대기' | '취소' | '승인' | '거절';
  page?: number;
  size?: number;
  sort?: string;
}
export interface GetRequestInformationParams {
  storeId: string;
}

export interface SeatScheduleParams {
  storeChairId: number;
  startSchedule: string;
  endSchedule: string;
  customUtilizationContents: {
    fieldId: number;
    content: string[];
  }[];
}
export interface SpaceScheduleParams {
  storeSpaceId: number;
  startSchedule: string;
  endSchedule: string;
  customUtilizationContents: {
    fieldId: number;
    content: string[];
  }[];
}

export interface ReservationParams {
  'reservation-date-and-time': string;
}
