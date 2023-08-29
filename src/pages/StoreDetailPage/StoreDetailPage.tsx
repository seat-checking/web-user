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

  return (
    <Container>
      <Carousel />
      <BackBtn onClick={handleBack}>
        <ArrowLeft />
      </BackBtn>
      <HeaderWrap>
        <Name>{storeInfo?.name}</Name>
        <Introduction>{storeInfo?.introduction}</Introduction>
      </HeaderWrap>
      <StoreDetailTab storeInfo={storeInfo} />
    </Container>
  );
};
