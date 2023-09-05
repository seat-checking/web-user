import { useQueryClient } from '@tanstack/react-query';
import { Button } from 'components/form/atoms/Button';
import { DetailItem } from 'components/reservationStatus/DetailItem';
import { ButtonWrapper } from 'components/reservationStatus/DetailItem/DetailItem.styled';
import {
  getFormattedMonthAndDay,
  getFormattedTime,
} from 'components/reservationStatus/reservationList/ApprovedList';
import { REJECTED_LIST_QUERY_KEY } from 'components/reservationStatus/reservationList/RejectedList';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import type { ReservationListResponse } from 'api/reservation/common';

export const RejectedDetail = () => {
  const queryClient = useQueryClient();
  const { reservationId } = useParams<{ reservationId: string }>();
  const theme = useTheme();

  const cachedData = queryClient.getQueryData<{
    pages: ReservationListResponse[];
  }>(REJECTED_LIST_QUERY_KEY);

  // 숫자로 변환
  const reservationIdAsNumber = Number(reservationId);

  const reservationDetail = cachedData?.pages
    .flatMap((page) => page.content)
    .find((res) => res.reservationId === reservationIdAsNumber);

  if (!reservationDetail) {
    return null;
  }
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
        statusText='예약 거절'
        backgroundColor={theme.palette.grey[100]}
        statusTextColor={theme.palette.grey[500]}
        borderColor={theme.palette.grey[300]}
      />
      <ButtonWrapper>
        <Button
          backgroundColor={theme.palette.grey[100]}
          color={theme.palette.grey[400]}
          disabled
        >
          가게 사정으로 인해 거절된 예약입니다.
        </Button>
      </ButtonWrapper>
    </>
  );
};
