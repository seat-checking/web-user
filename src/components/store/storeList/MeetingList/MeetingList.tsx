import { getStoreList } from 'api/store/storeApi';
import { StoreItem } from 'components/store/StoreItem';
import { useEffect, useState } from 'react';
import type { StoreUser } from 'api/store/storeApi';

import type { VFC } from 'common/utils/types';

export const MeetingList: VFC = () => {
  const [stores, setStores] = useState<StoreUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getStoreData = async () => {
      try {
        setLoading(true);
        const resData = await getStoreList({ category: 'SPACE' });
        setStores(resData.result.storeList);
        setLoading(false);
      } catch (e) {
        setError('서버에서 데이터를 받아오지 못했습니다');
        setLoading(false);
      }
    };
    getStoreData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {stores.map((store) => (
        <StoreItem
          key={store.name}
          src={store.mainImage}
          storeName={store.name}
          introduction={store.introduction}
        />
      ))}
    </>
  );
};
