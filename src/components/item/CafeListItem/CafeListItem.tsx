// import axios from 'axios';
import {
  StoreListDescription,
  StoreListDiv,
  StoreListImg,
  StoreListImgDiv,
  StoreListStoreIntroduction,
  StoreListStoreName,
} from 'components/item/AllListItem/AllListItem.styled';
import React, { useEffect, useState } from 'react';

import type { VFC } from 'common/utils/types';

interface ItemsProps {
  id: number;
  image: string;
  storeName: string;
  introduction: string;
}

export const CafeListItem = () => {
  /*
  const [stores, setStores] = useState<ItemsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getStoreData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/');
        setStores(response.data);
      } catch (e) {
        // 문제 발생시 처리 로직
        setError('서버에서 데이터를 받아오지 못했습니다');
      }
      setLoading(false);
    };
    getStoreData();
  }, []);

  if (loading) {
    return; // 로딩시 로직
  }
  if (error) {
    return; // 에러 발생 로직
  }

  if (stores === null) {
    return null;
  }
  */

  const items: ItemsProps[] = [
    {
      id: 1,
      image: 'assets/images/storeimage.png',
      storeName: '가게이름3',
      introduction: '한줄소개',
    },
    {
      id: 2,
      image: 'assets/images/storeimage.svg',
      storeName: '가게이름3',
      introduction: '한줄소개',
    },
    {
      id: 3,
      image: 'assets/images/storeimage.svg',
      storeName: '가게이름3',
      introduction: '한줄소개',
    },
  ];

  return (
    <>
      {items.map((store) => (
        <StoreListDiv key={store.id}>
          <StoreListImgDiv>
            <StoreListImg src={store.image} />
          </StoreListImgDiv>
          <StoreListDescription>
            <StoreListStoreName>{store.storeName}</StoreListStoreName>
            <StoreListStoreIntroduction>
              {store.introduction}
            </StoreListStoreIntroduction>
          </StoreListDescription>
        </StoreListDiv>
      ))}
    </>
  );
};
