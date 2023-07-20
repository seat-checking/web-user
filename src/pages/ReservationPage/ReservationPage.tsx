import { Reservation } from 'components/store/reservation';
import { BackButton } from 'pages/MyPage/MyPage.styled';
import {
  HeaderWrapper,
  NextButton,
  ReservationPageHeader,
  ReservationPageTitle,
} from 'pages/ReservationPage/ReservationPage.styled';

export const ReservationPage = () => {
  return (
    <>
      <HeaderWrapper>
        <ReservationPageHeader>
          <BackButton />
          <ReservationPageTitle>예약신청</ReservationPageTitle>
          <NextButton>다음</NextButton>
        </ReservationPageHeader>
      </HeaderWrapper>
      <Reservation />
    </>
  );
};
