import { Button } from 'components/form/atoms/Button';
import { ReservationStatus } from 'components/reservationStatus/CompletedDetail/CompletedDetail.styled';

import {
  ButtonWrapper,
  Circle,
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
} from 'components/reservationStatus/WaitingDetail/WaitingDetail.styled';
import { BackButton } from 'pages/MyPage/MyPage.styled';
import { useNavigate } from 'react-router-dom';

export const CompletedDetail = () => {
  const navigate = useNavigate();

  const handleBack = (): void => {
    navigate(-1);
  };

  return (
    <ReservationDetailWrapper>
      <ReservationDetailHeader>
        <BackButton onClick={handleBack} />
        <ListTitle>Hspace</ListTitle>
      </ReservationDetailHeader>
      <ReservationContent>
        <ReservationStatus>예약 완료</ReservationStatus>
        <ContentHeader>
          <ReservationName>최우영님</ReservationName>
          <Circle isActive={false} />
          <ReservationSeatNumber>152번</ReservationSeatNumber>
        </ContentHeader>
        <ContentMain>
          <ContentMainTextWrapper>
            <ContentMainText>
              <ContentMainTextCircle />
              신청한 공간
            </ContentMainText>
            <ContentSubText>1층 레드룸</ContentSubText>
          </ContentMainTextWrapper>
          <ContentMainTextWrapper>
            <ContentMainText>
              <ContentMainTextCircle />
              신청한 좌석
            </ContentMainText>
            <ContentSubText>152번</ContentSubText>
          </ContentMainTextWrapper>
          <ContentMainTextWrapper gap={1.2}>
            <ContentMainText>
              <ContentMainTextCircle />
              희망 이용 날짜
            </ContentMainText>
            <ContentSubText>23년 2월 23일</ContentSubText>
          </ContentMainTextWrapper>
          <ContentMainTextWrapper gap={1.2}>
            <ContentMainText>
              <ContentMainTextCircle />
              희망 이용 시간
            </ContentMainText>
            <ContentSubText>15:00 ~ 18:00</ContentSubText>
          </ContentMainTextWrapper>
        </ContentMain>
      </ReservationContent>
      <ButtonWrapper>
        <Button disabled backgroundColor='#EFF0F5' color='#727582'>
          이미 예약이 완료된 고객 입니다.
        </Button>
      </ButtonWrapper>
    </ReservationDetailWrapper>
  );
};
