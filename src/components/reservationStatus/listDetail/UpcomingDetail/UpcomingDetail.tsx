import { useQueryClient } from '@tanstack/react-query';
import { SpaceReservationCancel } from 'api/reservation/reservation';
import { PATH } from 'common/utils/constants';
import { Button } from 'components/form/atoms/Button';
import { DetailItem } from 'components/reservationStatus/DetailItem';
import { ButtonWrapper } from 'components/reservationStatus/DetailItem/DetailItem.styled';
import { UPCOMING_LIST_QUERY_KEY } from 'components/reservationStatus/Upcoming';
import {
  getFormattedMonthAndDay,
  getFormattedTime,
} from 'components/reservationStatus/reservationList/ApprovedList';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import type { SpaceReservationListResponse } from 'api/reservation/common';

export const UpcomingDetail = () => {
  const queryClient = useQueryClient();
  const { participationId } = useParams<{ participationId: string }>();
  const navigate = useNavigate();
  const theme = useTheme();

  const cachedData = queryClient.getQueryData<{
    pages: SpaceReservationListResponse[];
  }>(UPCOMING_LIST_QUERY_KEY);

  // 숫자로 변환
  const participationIdAsNumber = Number(participationId);

  const reservationDetail = cachedData?.pages
    .flatMap((page) => page.content)
    .find((res) => res.id === participationIdAsNumber);

  if (!reservationDetail) {
    return null;
  }

  const handleCancel = async () => {
    try {
      await SpaceReservationCancel(participationIdAsNumber);
      queryClient.invalidateQueries(UPCOMING_LIST_QUERY_KEY);
      navigate(`/${PATH.reservationStatus}`);
    } catch (error) {
      return null;
    }
  };

  const now = new Date();

  // reservationEndDateAndTime은 문자열 형태라고 가정하고 Date 객체로 변환합니다.
  // 이 부분은 실제 데이터의 형태에 따라 조정이 필요할 수 있습니다.
  const reservationEndTime = new Date(reservationDetail.endSchedule);

  // 예약 종료 시간이 현재 시간보다 앞선 경우 예약 취소 비활성화
  const isPastReservation = now > reservationEndTime;

  return (
    <>
      <DetailItem
        storeName={reservationDetail.storeName}
        name={reservationDetail.userNickname}
        seatNumber={reservationDetail.storeSpaceName}
        storePlace={reservationDetail.storeSpaceName}
        reservationDate={getFormattedMonthAndDay(
          reservationDetail.startSchedule,
        )}
        reservationTime={`${getFormattedTime(
          reservationDetail.startSchedule,
        )}-${getFormattedTime(reservationDetail.endSchedule)}`}
        isActive
        statusText='참여 대기중'
        backgroundColor={theme.palette.grey[300]}
        statusTextColor={theme.palette.grey[500]}
        borderColor={theme.palette.grey[100]}
      />
      <ButtonWrapper>
        {isPastReservation ? (
          <Button
            backgroundColor={theme.palette.grey[100]}
            color={theme.palette.grey[400]}
            disabled
          >
            이미 만료된 예약입니다.
          </Button>
        ) : (
          <Button
            backgroundColor={theme.palette.primary.orange}
            color={theme.palette.white.main}
            onClick={handleCancel}
          >
            참여 취소
          </Button>
        )}
      </ButtonWrapper>
    </>
  );
};
