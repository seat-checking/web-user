import { useInfiniteQuery } from '@tanstack/react-query';
import { getStoreList } from 'api/store/store';
import { Spinner } from 'components/common/Spinner';
import { StoreItem } from 'components/store/StoreItem';
import { ErrorMessage } from 'components/store/StoreList/StoreList.styled';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

import type { ErrorResponse } from 'api/common';
import type { StoreListResponse, StoreUser } from 'api/store/common';
import type { VFC } from 'common/utils/types';

interface StoreListProps {
  category?: '음식점' | '카페' | '모임';
  queryKey: string;
}

export const StoreList: VFC<StoreListProps> = ({ category, queryKey }) => {
  const getStoreData = async ({ pageParam = 1 }) => {
    const resData = await getStoreList({
      category,
      page: pageParam,
      size: 15,
    });
    return resData.result;
  };

  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<StoreListResponse, ErrorResponse>({
      queryKey: [queryKey],
      queryFn: getStoreData,
      getNextPageParam: (lastPage) => {
        if (lastPage.totalPage > lastPage.curPage) {
          return lastPage.curPage + 1;
        }
        return undefined;
      },
      staleTime: 60000,
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
