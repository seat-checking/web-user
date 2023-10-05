/* eslint-disable no-console */

import { getStoreDetaill } from 'api/store/store';
import { ReactComponent as ArrowLeft } from 'assets/svgs/arrowLeft.svg';
import { Carousel } from 'components/store/Carousel';
import { StoreDetailTab } from 'components/store/StoreDetailTab';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  BackBtn,
  Container,
  HeaderWrap,
  Introduction,
  Name,
} from './StoreDetailPage.styled';
import type { StoreDetaillResponse } from 'api/store/common';

import type { VFC } from 'common/utils/types';

/**
 * 가게 상세페이지 컴포넌트
 */
export const StoreDetailPage: VFC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [storeInfo, setStoreInfo] = useState<StoreDetaillResponse | null>(null);

  useEffect(() => {
    const getStoreInfo = async () => {
      try {
        if (storeId) {
          const response = await getStoreDetaill({ id: +storeId });
          setStoreInfo(response.result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getStoreInfo();
  }, [storeId]);

  const navigate = useNavigate();
  const handleBack = (): void => {
    navigate(-1);
  };

  const defaultImage =
    'https://cdn.pixabay.com/photo/2016/10/18/17/25/stadium-1750794_1280.jpg'; // 임의의 대체 이미지 URL
  const imageArray = storeInfo ? [storeInfo.mainImage || defaultImage] : null;

  return (
    <Container>
      <Carousel images={imageArray} />
      <BackBtn onClick={handleBack}>
        <ArrowLeft />
      </BackBtn>
      <HeaderWrap>
        <Name>{storeInfo?.storeName}</Name>
        <Introduction>{storeInfo?.introduction}</Introduction>
      </HeaderWrap>
      <StoreDetailTab storeInfo={storeInfo} />
    </Container>
  );
};
