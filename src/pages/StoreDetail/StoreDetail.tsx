import { ReactComponent as ArrowLeft } from 'assets/svgs/arrowLeft.svg';
import { ImageSlider } from 'components/layout/molecules/ImageSlider/ImageSlider';
import { StoreDetailTab } from 'components/store/StoreDetailTab';

import {
  BackBtn,
  Container,
  HeaderWrap,
  Introduction,
  Name,
} from 'pages/StoreDetail/StoreDetail.styled';

import type { VFC } from 'common/utils/types';
import type { SlideItem } from 'components/layout/molecules/ImageSlider/ImageSlider';

/**
 * 가게 상세페이지 컴포넌트
 */
export const StoreDetail: VFC = () => {
  const imgList: SlideItem[] = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdwDEYRPat47IaYdO719kyxDBPCxMEfgIZGEEfreNVg&s',
    },
    {
      url: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_206.jpg',
    },
    {
      url: 'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
    },
  ];

  const handleBack = (): void => {
    console.log('handle back 라우팅 설정 아직 안돼서 임시 코드 넣음');
  };

  return (
    <Container>
      <ImageSlider dataList={imgList} />
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