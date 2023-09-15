import { useQueryClient } from '@tanstack/react-query';
import { Button } from 'components/form/atoms/Button';
import { DetailItem } from 'components/reservationStatus/DetailItem';
import { ButtonWrapper } from 'components/reservationStatus/DetailItem/DetailItem.styled';
import { USENOW_LIST_QUERY_KEY } from 'components/reservationStatus/UseNow';
import {
  getFormattedMonthAndDay,
  getFormattedTime,
} from 'components/reservationStatus/reservationList/ApprovedList';

import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import type { UseReservationListResponse } from 'api/reservation/common';

export const NowUseDetail = () => {
  const queryClient = useQueryClient();
  const { reservationId } = useParams<{ reservationId: string }>();
  const theme = useTheme();

  const cachedData = queryClient.getQueryData<{
    pages: UseReservationListResponse[];
  }>(USENOW_LIST_QUERY_KEY);

  // 숫자로 변환
  const reservationIdAsNumber = Number(reservationId);

  const reservationDetail = cachedData?.pages
    .flatMap((page) => page.content)
    .find((res) => res.id === reservationIdAsNumber);

  if (!reservationDetail) {
    return null;
  }
  return (
    <>
      <DetailItem
        storeName={reservationDetail.storeName}
        name={reservationDetail.userNickname}
        seatNumber={reservationDetail.walkInUnitWalkedInByUser}
        storePlace={reservationDetail.storeSpaceName}
        reservationDate={getFormattedMonthAndDay(
          reservationDetail.startSchedule,
        )}
        reservationTime={`${getFormattedTime(
          reservationDetail.startSchedule,
        )}-${getFormattedTime(reservationDetail.endSchedule)}`}
        isActive
        statusText='사용 완료'
        backgroundColor='#FF8D4E26'
        statusTextColor={theme.palette.primary.orange}
        borderColor={theme.palette.primary.orange}
      />
      <ButtonWrapper>
        <Button
          backgroundColor={theme.palette.grey[100]}
          color={theme.palette.grey[400]}
          disabled
        >
          사용이 완료된 내역입니다.
        </Button>
      </ButtonWrapper>
    </>
  );
};
