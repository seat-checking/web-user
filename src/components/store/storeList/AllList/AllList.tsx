import { useInfiniteQuery } from '@tanstack/react-query';
import { getStoreList } from 'api/store/storeApi';
import { StoreItem } from 'components/store/StoreItem';
import InfiniteScroll from 'react-infinite-scroller';
import type { ErrorResponse } from 'api/store/common';
import type { StoreUser, StoreListResponse } from 'api/store/storeApi';

import type { VFC } from 'common/utils/types';

export const AllList: VFC = () => {
  const getStoreData = async ({ pageParam = 1 }) => {
    const resData = await getStoreList({
      category: 'NONE',
      page: pageParam,
      size: 15,
    });
    return resData.result;
  };

  const { isLoading, isError, error, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<StoreListResponse, ErrorResponse>({
      queryKey: ['AllList'],
      queryFn: getStoreData,
      // undefined (or false) 리턴 -> 다음 데이터가 없다!(hasNextPage=false),
      // 다른 값을 리턴 -> 다음 데이터가 있고 이 리턴값을 pageParam으로 써!(hasNextPage=true)
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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // pages 안에 있는 모든 store 데이터 하나의 배열로 만들기
  // data 안에는 pages와 pageParams 두개가 들어있다
  let stores: StoreUser[] = [];
  for (let i = 0; i < data.pages.length; i++) {
    const page = data.pages[i];
    stores = [...stores, ...page.storeList]; // 배열
  }

  return (
    <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
      {stores.map((store) => (
        <StoreItem
          key={store.id}
          src={store.mainImage}
          storeName={store.name}
          introduction={store.introduction}
        />
      ))}
    </InfiniteScroll>
  );
};
