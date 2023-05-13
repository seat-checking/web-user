import { ReactComponent as ArrowLeft } from 'assets/svgs/arrowLeft.svg';
import { ImageSlider } from 'pages/StoreDetail/components/ImageSlider';
import { SeatLayoutTab } from 'pages/StoreDetail/components/SeatLayoutTab';
import { StoreInfoTab } from 'pages/StoreDetail/components/StoreInfoTab';
import { Tabs } from 'pages/StoreDetail/components/Tabs';
import styled from 'styled-components';
import type { VFC } from 'common/utils/types';
import type { SlideItem } from 'pages/StoreDetail/components/ImageSlider';
import type { TabItem } from 'pages/StoreDetail/components/Tabs';

/**
 * 가게 상세페이지 컴포넌트
 */
export const StoreDetail: VFC = () => {
  const tabList: TabItem[] = [
    {
      text: '좌석 정보',
      content: <SeatLayoutTab />,
    },
    {
      text: '가게 정보',
      content: <StoreInfoTab />,
    },
  ];

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
    <div>
      <ImageSlider dataList={imgList} />
      <BackBtn onClick={handleBack}>
        <ArrowLeft />
      </BackBtn>
      <HeaderWrap>
        <Name>가게 이름</Name>
        <Introduction>한 줄 소개</Introduction>
      </HeaderWrap>
      <Tabs tabList={tabList} />
    </div>
  );
};

const BackBtn = styled.button`
  position: fixed;
  top: 4.4rem;
  left: 1.6rem;
`;
const HeaderWrap = styled.div`
  padding: 2.4rem 1.6rem;
`;

const Name = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;

  margin-bottom: 0.8rem;
`;

const Introduction = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
`;
