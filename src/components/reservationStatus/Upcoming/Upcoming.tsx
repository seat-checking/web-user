import { useInfiniteQuery } from '@tanstack/react-query';
import { getUpcomingList } from 'api/reservation/reservation';
import { PATH } from 'common/utils/constants';

import { Spinner } from 'components/common/Spinner';
import { ListItem } from 'components/reservationStatus/ListItem';
import {
  getFormattedMonthAndDay,
  getFormattedTime,
} from 'components/reservationStatus/reservationList/ApprovedList';

import { ErrorMessage } from 'components/store/StoreList/StoreList.styled';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import type {
  SpaceReservationList,
  SpaceReservationListResponse,
} from 'api/reservation/common';

export const UPCOMING_LIST_QUERY_KEY = ['upComingList'];

export const Upcoming = () => {
  const getReservationData = async ({ pageParam = 1 }) => {
    const resData = await getUpcomingList({
      page: pageParam,
      size: 15,
    });
    return resData.result;
  };

  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<SpaceReservationListResponse>({
      queryKey: ['upComingList'],
      queryFn: getReservationData,
      getNextPageParam: (lastPage) => {
        if (lastPage.hasNext) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    });

  const handleLoadMore = (): void => {
    fetchNextPage();
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage>요청한 페이지를 찾을 수 없습니다.</ErrorMessage>;
  }

  let reservations: SpaceReservationList[] = [];
  for (let i = 0; i < data.pages.length; i++) {
    const page = data.pages[i];
    reservations = [...reservations, ...page.content];
  }

  return (
    <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
      {reservations.map((reservation) => (
        <Link
          key={reservation.id}
          to={`/${PATH.reservationStatus}/${PATH.spaceUpcoming}/${reservation.id}`}
        >
          <ListItem
            src={reservation.storeMainImage}
            ReservationName={reservation.storeName}
            seatNumber={reservation.storeName}
            ReservationInfo={reservation.storeSpaceName}
            ReservationDate={getFormattedMonthAndDay(reservation.startSchedule)}
            ReservationTime={`${getFormattedTime(
              reservation.startSchedule,
            )}-${getFormattedTime(reservation.endSchedule)}`}
            isActive={false}
          />
        </Link>
      ))}
    </InfiniteScroll>
  );
};
