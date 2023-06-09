import { ReactComponent as ArrowLeft } from 'assets/svgs/arrowLeft.svg';

import { StoreCarousel } from 'components/store/StoreCarousel/StoreCarousel';
import { StoreDetailTab } from 'components/store/StoreDetailTab';

import {
  BackBtn,
  Container,
  HeaderWrap,
  Introduction,
  Name,
} from 'pages/StoreDetail/StoreDetail.styled';

import type { VFC } from 'common/utils/types';

/**
 * 가게 상세페이지 컴포넌트
 */
export const StoreDetail: VFC = () => {
  const handleBack = (): void => {
    console.log('handle back 라우팅 설정 아직 안돼서 임시 코드 넣음');
  };

  return (
    <Container>
      <StoreCarousel />
      <BackBtn onClick={handleBack}>
        <ArrowLeft />
      </BackBtn>
      <HeaderWrap>
        <Name>가게 이름</Name>
        <Introduction>한 줄 소개</Introduction>
      </HeaderWrap>
      <StoreDetailTab />
    </Container>
  );
};
