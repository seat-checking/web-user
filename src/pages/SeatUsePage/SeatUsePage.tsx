import { PATH } from 'common/utils/constants';
import { BackButton } from 'components/common/BackButton';
import { SeatUse } from 'components/store/reservation/seatReservation/SeatUse';
import {
  HeaderWrapper,
  ReservationPageHeader,
  ReservationPageTitle,
} from 'pages/SeatUsePage/SeatUsePage.styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservationStore } from 'store/reservationStore';

export const SeatUsePage = () => {
  const storeChairId = useReservationStore((state) => state.storeChairId);
  const navigate = useNavigate();
  useEffect(() => {
    if (storeChairId === 1) {
      navigate(PATH.storeList);
    }
  }, [storeChairId, navigate]);
  return (
    <>
      <HeaderWrapper>
        <ReservationPageHeader>
          <BackButton />
          <ReservationPageTitle>좌석사용</ReservationPageTitle>
        </ReservationPageHeader>
      </HeaderWrapper>
      <SeatUse />
    </>
  );
};
