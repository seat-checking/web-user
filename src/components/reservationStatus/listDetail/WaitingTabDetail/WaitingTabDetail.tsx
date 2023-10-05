import { useQueryClient } from '@tanstack/react-query';

import { useReservationCancel } from 'api/reservation/reservation';
import { PATH } from 'common/utils/constants';
import { Button } from 'components/form/atoms/Button';
import { DetailItem } from 'components/reservationStatus/DetailItem';
import { ButtonWrapper } from 'components/reservationStatus/DetailItem/DetailItem.styled';
import {
  getFormattedMonthAndDay,
  getFormattedTime,
} from 'components/reservationStatus/reservationList/ApprovedList';
import { WAITINGLIST_QUERY_KEY } from 'components/reservationStatus/reservationList/WaitingList';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import type { ReservationListResponse } from 'api/reservation/common';

export const WaitingTabDetail = () => {
  const queryClient = useQueryClient();
  const { reservationId } = useParams<{ reservationId: string }>();
  const navigate = useNavigate();
  const theme = useTheme();

  const cachedData = queryClient.getQueryData<{
    pages: ReservationListResponse[];
  }>(WAITINGLIST_QUERY_KEY);

  // 숫자로 변환
  const reservationIdAsNumber = Number(reservationId);

  const reservationDetail = cachedData?.pages
    .flatMap((page) => page.content)
    .find((res) => res.reservationId === reservationIdAsNumber);

  if (!reservationDetail) {
    return null;
  }

  const handleCancel = async () => {
    try {
      await useReservationCancel(reservationIdAsNumber);
      queryClient.invalidateQueries(WAITINGLIST_QUERY_KEY);
      navigate(`/${PATH.reservationStatus}`);
    } catch (error) {
      return null;
    }
  };

  const now = new Date();

  const reservationEndTime = new Date(reservationDetail.endSchedule);

  // 예약 종료 시간이 현재 시간보다 앞선 경우 예약 취소 비활성화
  const isPastReservation = now > reservationEndTime;

  return (
    <>
      <DetailItem
        storeName={reservationDetail.storeName}
        name={reservationDetail.userNickname}
        seatNumber={reservationDetail.reservationUnitReservedByUser}
        storePlace={reservationDetail.storeSpaceName}
        reservationDate={getFormattedMonthAndDay(
          reservationDetail.startSchedule,
        )}
        reservationTime={`${getFormattedTime(
          reservationDetail.startSchedule,
        )}-${getFormattedTime(reservationDetail.endSchedule)}`}
        isActive
        statusText='예약 대기 중'
        backgroundColor={theme.palette.grey[100]}
        statusTextColor={theme.palette.grey[500]}
        borderColor={theme.palette.grey[300]}
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
            예약 취소
          </Button>
        )}
      </ButtonWrapper>
    </>
  );
};
