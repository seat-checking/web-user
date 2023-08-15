import { useQueryClient } from '@tanstack/react-query';
import {
  reservationCancel,
  type ReservationListResponse,
} from 'api/reservation/reservation';
import { PATH } from 'common/utils/constants';
import { Button } from 'components/form/atoms/Button';
import { DetailItem } from 'components/reservationStatus/DetailItem';
import { ButtonWrapper } from 'components/reservationStatus/DetailItem/DetailItem.styled';
import { WAITINGTAB_LIST_QUERY_KEY } from 'components/reservationStatus/WaitingTab';
import {
  getFormattedMonthAndDay,
  getFormattedTime,
} from 'components/reservationStatus/reservationList/ApprovedList';
import { useNavigate, useParams } from 'react-router-dom';

export const WaitingTabDetail = () => {
  const queryClient = useQueryClient();
  const { reservationId } = useParams<{ reservationId: string }>();
  const navigate = useNavigate();

  const cachedData = queryClient.getQueryData<{
    pages: ReservationListResponse[];
  }>(WAITINGTAB_LIST_QUERY_KEY);

  console.log(cachedData);

  // 숫자로 변환
  const reservationIdAsNumber = Number(reservationId);

  const reservationDetail = cachedData?.pages
    .flatMap((page) => page.content)
    .find((res) => res.reservationId === reservationIdAsNumber);

  if (!reservationDetail) {
    console.log('데이터 없음!!');

    return null;
  }

  const handleCancel = async () => {
    try {
      await reservationCancel(reservationIdAsNumber);
      queryClient.invalidateQueries(WAITINGTAB_LIST_QUERY_KEY);
      navigate(`/${PATH.reservationStatus}`);
    } catch (error) {
      console.log('예약 취소 중 오류가 발생했습니다. 다시 시도해주세요.');
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
        seatNumber={reservationDetail.reservationUnitReservedByUser}
        storePlace={reservationDetail.storeSpaceName}
        reservationDate={getFormattedMonthAndDay(
          reservationDetail.startSchedule,
        )}
        reservationTime={`${getFormattedTime(
          reservationDetail.startSchedule,
        )}-${getFormattedTime(reservationDetail.endSchedule)}`}
        isActive
      />
      <ButtonWrapper>
        {isPastReservation ? (
          <Button backgroundColor='#EFF0F5' color='#727582'>
            이미 만료된 예약입니다.
          </Button>
        ) : (
          <Button backgroundColor='#FF8D4E' color='#FFF' onClick={handleCancel}>
            예약 취소
          </Button>
        )}
      </ButtonWrapper>
    </>
  );
};