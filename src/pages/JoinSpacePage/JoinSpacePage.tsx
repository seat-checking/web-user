import { BackButton } from 'components/common/BackButton';
import {
  HeaderWrapper,
  ReservationPageHeader,
  ReservationPageTitle,
} from 'pages/SeatUsePage/SeatUsePage.styled';

/**
 * 스페이스 참여 페이지
 */
export const JoinSpacePage: React.FC = () => {
  return (
    <HeaderWrapper>
      <ReservationPageHeader>
        <BackButton />
        <ReservationPageTitle>스페이스 참여</ReservationPageTitle>
      </ReservationPageHeader>
    </HeaderWrapper>
  );
};
