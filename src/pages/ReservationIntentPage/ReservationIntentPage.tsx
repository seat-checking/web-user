import { Intent } from 'components/store/reservation/Intent';
import { BackButton } from 'pages/MyPage/MyPage.styled';
import {
  HeaderWrapper,
  ReservationPageHeader,
  ReservationPageTitle,
} from 'pages/SeatUsePage/SeatUsePage.styled';
import React from 'react';

export const ReservationIntentPage = () => {
  return (
    <>
      <HeaderWrapper>
        <ReservationPageHeader>
          <BackButton />
          <ReservationPageTitle>좌석사용</ReservationPageTitle>
        </ReservationPageHeader>
      </HeaderWrapper>
      <Intent />
    </>
  );
};
