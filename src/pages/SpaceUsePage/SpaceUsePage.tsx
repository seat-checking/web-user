import { PATH } from 'common/utils/constants';
import { BackButton } from 'components/common/BackButton';
import { SpaceUse } from 'components/store/reservation/spaceReservation/SpaceUse';

import {
  HeaderWrapper,
  ReservationPageHeader,
  ReservationPageTitle,
} from 'pages/SeatUsePage/SeatUsePage.styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservationStore } from 'store/reservationStore';

export const SpaceUsePage = () => {
  const storeSpaceId = useReservationStore((state) => state.storeSpaceId);
  const navigate = useNavigate();
  useEffect(() => {
    if (storeSpaceId === 1) {
      navigate(PATH.storeList);
    }
  }, [storeSpaceId, navigate]);
  return (
    <>
      <HeaderWrapper>
        <ReservationPageHeader>
          <BackButton />
          <ReservationPageTitle>스페이스 사용</ReservationPageTitle>
        </ReservationPageHeader>
      </HeaderWrapper>
      <SpaceUse />
    </>
  );
};
