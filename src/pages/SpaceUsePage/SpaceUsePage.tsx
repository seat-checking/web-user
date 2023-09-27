import { BackButton } from 'components/common/BackButton';
import { SpaceUse } from 'components/store/reservation/spaceReservation/SpaceUse';

import {
  HeaderWrapper,
  ReservationPageHeader,
  ReservationPageTitle,
} from 'pages/SeatUsePage/SeatUsePage.styled';

export const SpaceUsePage = () => {
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
