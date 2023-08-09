import { useInfiniteQuery } from '@tanstack/react-query';
import { getStoreList } from 'api/store/storeApi';
import { Spinner } from 'components/layout/Spinner';
import { StoreItem } from 'components/store/StoreItem';
import { ErrorMessage } from 'components/store/storeList/AllList/AllList.styled';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import type { ErrorResponse } from 'api/store/common';
import type { StoreListResponse, StoreUser } from 'api/store/storeApi';

import type { VFC } from 'common/utils/types';

export const MeetingList: VFC = () => {
  const getStoreData = async ({ pageParam = 1 }) => {
    const resData = await getStoreList({
      category: '모임',
      page: pageParam,
      size: 15,
    });
    return resData.result;
  };

  const { isLoading, isError, error, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<StoreListResponse, ErrorResponse>({
      queryKey: ['CafeList'],
      queryFn: getStoreData,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.totalPage > lastPage.curPage) {
          return lastPage.curPage + 1;
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

  let stores: StoreUser[] = [];
  for (let i = 0; i < data.pages.length; i++) {
    const page = data.pages[i];
    stores = [...stores, ...page.storeResponseList];
  }

  return (
    <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
      {stores.map((store) => (
        <Link key={store.id} to={`/storeDetail/${store.id}`}>
          <StoreItem
            key={store.id}
            src={store.mainImage}
            storeName={store.name}
            introduction={store.introduction}
            open={store.open}
          />
        </Link>
      ))}
    </InfiniteScroll>
  );
};
