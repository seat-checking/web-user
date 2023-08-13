import { useInfiniteQuery } from '@tanstack/react-query';
import { getReservationList } from 'api/reservation/reservation';
import { Spinner } from 'components/layout/Spinner';
import { ListItem } from 'components/reservationStatus/ListItem';
import { ErrorMessage } from 'components/store/storeList/AllList/AllList.styled';
import InfiniteScroll from 'react-infinite-scroller';
import type {
  ReservationListResponse,
  ReservationUser,
} from 'api/reservation/reservation';

export const WaitingTab = () => {
  const getReservationData = async ({ pageParam = 1 }) => {
    const resData = await getReservationList({
      reservationStatus: '대기',
      page: pageParam,
      size: 15,
    });
    return resData.result;
  };
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ReservationListResponse>({
      queryKey: ['waitingList'],
      queryFn: getReservationData,
      getNextPageParam: (lastPage, page) => {
        if (lastPage.hasNext) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    });

  const handleLoadMore = (page: number): void => {
    fetchNextPage();
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage>요청한 페이지를 찾을 수 없습니다.</ErrorMessage>;
  }

  let reservations: ReservationUser[] = [];
  for (let i = 0; i < data.pages.length; i++) {
    const page = data.pages[i];
    reservations = [...reservations, ...page.content];
  }

  const getFormattedTime = (isoString: string) => {
    const date = new Date(isoString);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  const getFormattedMonthAndDay = (isoString: string) => {
    const date = new Date(isoString);
    const month = String(date.getUTCHours()).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${month}월 ${day}일`;
  };

  return (
    <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
      {reservations.map((reservation) => (
        <ListItem
          key={reservation.reservationId}
          src={reservation.storeMainImage}
          ReservationName={reservation.storeName}
          seatNumber={reservation.reservationUnitReservedByUser}
          ReservationInfo={reservation.storeSpaceName}
          ReservationDate={getFormattedMonthAndDay(reservation.startSchedule)}
          ReservationTime={`${getFormattedTime(
            reservation.startSchedule,
          )}-${getFormattedTime(reservation.endSchedule)}`}
          isActive
        />
      ))}
    </InfiniteScroll>
  );
};
