import { BackButton } from 'components/common/BackButton';
import { SeatUse } from 'components/store/reservation/seatReservation/SeatUse';
import {
  HeaderWrapper,
  ReservationPageHeader,
  ReservationPageTitle,
} from 'pages/SeatUsePage/SeatUsePage.styled';

export const SeatUsePage = () => {
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
