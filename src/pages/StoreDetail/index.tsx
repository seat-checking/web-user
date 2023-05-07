import { ImageSlider } from 'pages/StoreDetail/components/ImageSlider';
import { SeatLayoutTab } from 'pages/StoreDetail/components/SeatLayoutTab';
import { StoreInfoTab } from 'pages/StoreDetail/components/StoreInfoTab';
import { Tabs } from 'pages/StoreDetail/components/Tabs';
import { styled } from 'styled-components';
import type { VFC } from 'common/utils/types';

/**
 * 가게 상세페이지 컴포넌트
 */
export const StoreDetail: VFC = () => {
  const tabList = [
    {
      text: '좌석 정보',
      content: <SeatLayoutTab />,
    },
    {
      text: '가게 정보',
      content: <StoreInfoTab />,
    },
  ];
  return (
    <div>
      <ImageSlider />
      <HeaderWrap>
        <Name>가게 이름</Name>
        <Introduction>한 줄 소개</Introduction>
      </HeaderWrap>
      <Tabs tabList={tabList} />
    </div>
  );
};

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
