import { Intent } from 'components/store/reservation/Intent';
import { BackButton } from 'pages/MyPage/MyPage.styled';
import {
  HeaderWrapper,
  ReservationPageHeader,
  ReservationPageTitle,
} from 'pages/SeatUsePage/SeatUsePage.styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ReservationIntentPage = () => {
  const navigate = useNavigate();

  const handleBabkClick = () => {
    navigate(-1);
  };
  return (
    <>
      <HeaderWrapper>
        <ReservationPageHeader>
          <BackButton onClick={handleBabkClick} />
          <ReservationPageTitle>좌석사용</ReservationPageTitle>
        </ReservationPageHeader>
      </HeaderWrapper>
      <Intent />
    </>
  );
};
