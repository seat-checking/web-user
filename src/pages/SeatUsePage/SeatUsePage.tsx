import { SeatUse } from 'components/store/reservation/SeatUse';
import { BackButton } from 'pages/MyPage/MyPage.styled';
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
