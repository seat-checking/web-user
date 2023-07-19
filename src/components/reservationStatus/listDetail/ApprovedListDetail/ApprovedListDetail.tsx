import { DetailItem } from 'components/reservationStatus/DetailItem';

export const CompletedDetail = () => {
  const detail = {
    storeName: 'Hplace',
    name: '최우영',
    seatNumber: 152,
    storePlace: '1층 레드룸',
    reservationDate: '23년 2월 23일',
    reservationTime: '15:00 ~ 18:00',
  };
  return (
    <DetailItem
      storeName={detail.storeName}
      name={detail.name}
      seatNumber={detail.seatNumber}
      storePlace={detail.storePlace}
      reservationDate={detail.reservationDate}
      reservationTime={detail.reservationTime}
      isActive
    />
  );
};
