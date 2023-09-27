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
