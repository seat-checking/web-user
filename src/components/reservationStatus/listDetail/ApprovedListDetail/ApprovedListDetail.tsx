import { Button } from 'components/form/atoms/Button';
import { DetailItem } from 'components/reservationStatus/DetailItem';
import { ButtonWrapper } from 'components/reservationStatus/DetailItem/DetailItem.styled';

export const ApprovedListDetail = () => {
  const detail = {
    storeName: 'Hplace',
    name: '최우영',
    seatNumber: 152,
    storePlace: '1층 레드룸',
    reservationDate: '23년 2월 23일',
    reservationTime: '15:00 ~ 18:00',
  };
  return (
    <>
      <DetailItem
        storeName={detail.storeName}
        name={detail.name}
        seatNumber={detail.seatNumber}
        storePlace={detail.storePlace}
        reservationDate={detail.reservationDate}
        reservationTime={detail.reservationTime}
        isActive
      />
      <ButtonWrapper>
        <Button backgroundColor='#FF8D4E' color='#FFF'>
          예약 취소
        </Button>
      </ButtonWrapper>
    </>
  );
};
