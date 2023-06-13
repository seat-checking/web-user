import { useQuery } from '@tanstack/react-query';
import { getStoreList } from 'api/store/storeApi';
import { Spinner } from 'components/layout/Spinner';
import { StoreItem } from 'components/store/StoreItem';
import type { ErrorResponse } from 'api/store/common';
import type { StoreUser } from 'api/store/storeApi';

import type { VFC } from 'common/utils/types';

export const FoodList: VFC = () => {
  const getStoreData = async () => {
    const resData = await getStoreList({
      category: 'RESTAURANT',
      page: 1,
      size: 10,
    });
    return resData.result.storeList;
  };

  const {
    isLoading,
    isError,
    data: stores,
    error,
  } = useQuery<StoreUser[], ErrorResponse>({
    queryKey: ['FoodList'],
    queryFn: getStoreData,
    staleTime: 5000,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {stores.map((store) => (
        <StoreItem
          key={store.id}
          src={store.mainImage}
          storeName={store.name}
          introduction={store.introduction}
        />
      ))}
    </>
  );
};
