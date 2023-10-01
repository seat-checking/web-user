export const PATH = {
  login: 'login',
  signUp: 'signup',
  memberInfo: 'memberinfo',
  myPage: 'mypage',
  storeList: 'storelist',
  storeDetail: 'storedetail',
  search: 'search',
  reservationStatus: 'reservationstatus',
  reservationWaitingDetail: 'reservationwaitingdetail',
  reservation: 'reservation',
  approved: 'approved',
  cancelled: 'cancelled',
  rejected: 'rejected',
  waitingtab: 'waitingtab',
} as const;

export const queryKeys = {
  GET_SPACE_LIST: 'spaceList',
  GET_SPACE_LAYOUT: 'spaceLayout',
  GET_CURRENTLY_IN_USE: 'currentlyInUse',
  GET_SEAT_STATISTICS: 'spaceStatistics',
} as const;
