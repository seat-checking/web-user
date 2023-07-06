import { useInfiniteQuery } from '@tanstack/react-query';
import { getStoreList } from 'api/store/storeApi';
import { Spinner } from 'components/layout/Spinner';
import { StoreItem } from 'components/store/StoreItem';
import { ErrorMessage } from 'components/store/storeList/AllList/AllList.styled';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import type { ErrorResponse } from 'api/store/common';
import type { StoreUser, StoreListResponse } from 'api/store/storeApi';

import type { VFC } from 'common/utils/types';

export const AllList: VFC = () => {
  const getStoreData = async ({ pageParam = 1 }) => {
    const resData = await getStoreList({
      page: pageParam,
      size: 15,
    });
    return resData.result;
  };

  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
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
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage>요청한 페이지를 찾을 수 없습니다.</ErrorMessage>;
  }

  // pages 안에 있는 모든 store 데이터 하나의 배열로 만들기
  // data 안에는 pages와 pageParams 두개가 들어있다
  let stores: StoreUser[] = [];
  for (let i = 0; i < data.pages.length; i++) {
    const page = data.pages[i];
    stores = [...stores, ...page.storeResponseList]; // 배열
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
          />
        </Link>
      ))}
    </InfiniteScroll>
  );
};
