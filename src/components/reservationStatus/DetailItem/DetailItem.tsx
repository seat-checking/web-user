import {
  ContentHeader,
  ContentMain,
  ContentMainText,
  ContentMainTextCircle,
  ContentMainTextWrapper,
  ContentSubText,
  ListTitle,
  ReservationContent,
  ReservationDetailHeader,
  ReservationDetailWrapper,
  ReservationName,
  ReservationSeatNumber,
} from 'components/reservationStatus/DetailItem/DetailItem.styled';
import { Circle } from 'components/reservationStatus/ListItem/ListItem.styled';
import { ReservationStatus } from 'components/reservationStatus/listDetail/ApprovedListDetail/ApprovedListDetail.styled';

import { BackButton } from 'pages/MyPage/MyPage.styled';
import { useNavigate } from 'react-router-dom';
import type { VFC } from 'common/utils/types';

interface DetailItemProps {
  storeName: string;
  name: string;
  seatNumber: string;
  storePlace: string;
  reservationDate: string;
  reservationTime: string;
  isActive: boolean;
}

export const DetailItem: VFC<DetailItemProps> = ({
  storeName,
  name,
  seatNumber,
  storePlace,
  reservationDate,
  reservationTime,
  isActive,
}) => {
  const navigate = useNavigate();

  const handleBack = (): void => {
    navigate(-1);
  };

  return (
    <ReservationDetailWrapper>
      <ReservationDetailHeader>
        <BackButton onClick={handleBack} />
        <ListTitle>{storeName}</ListTitle>
      </ReservationDetailHeader>
      <ReservationContent>
        <ReservationStatus>예약 대기 중</ReservationStatus>
        <ContentHeader>
          <ReservationName>{name}</ReservationName>
          <Circle isActive={isActive} />
          <ReservationSeatNumber>{seatNumber}</ReservationSeatNumber>
        </ContentHeader>
        <ContentMain>
          <ContentMainTextWrapper>
            <ContentMainText>
              <ContentMainTextCircle />
              신청한 공간
            </ContentMainText>
            <ContentSubText>{storePlace}</ContentSubText>
          </ContentMainTextWrapper>
          <ContentMainTextWrapper>
            <ContentMainText>
              <ContentMainTextCircle />
              신청한 좌석
            </ContentMainText>
            <ContentSubText>{seatNumber}</ContentSubText>
          </ContentMainTextWrapper>
          <ContentMainTextWrapper gap={1.2}>
            <ContentMainText>
              <ContentMainTextCircle />
              희망 이용 날짜
            </ContentMainText>
            <ContentSubText>{reservationDate}</ContentSubText>
          </ContentMainTextWrapper>
          <ContentMainTextWrapper gap={1.2}>
            <ContentMainText>
              <ContentMainTextCircle />
              희망 이용 시간
            </ContentMainText>
            <ContentSubText>{reservationTime}</ContentSubText>
          </ContentMainTextWrapper>
        </ContentMain>
      </ReservationContent>
    </ReservationDetailWrapper>
  );
};
