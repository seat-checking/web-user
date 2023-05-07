import { SeatLayout } from 'pages/StoreDetail/components/SeatLayout';
import { styled } from 'styled-components';
import { flexSet } from 'styles/mixin';
import type { VFC } from 'common/utils/types';

/**
 * 좌석정보 탭을 클릭했을 때 하단에 보여줄 컴포넌트
 */
export const SeatLayoutTab: VFC = () => {
  return (
    <div>
      <UpperWrap>
        <Label>좌석 정보</Label>
        <SeatCountWrap>
          <SeatCount>총 좌석: 111개</SeatCount>
          <SeatCount>잔여 좌석: 111개</SeatCount>
        </SeatCountWrap>
        <AverageText>좌석 평균 이용시간:54분</AverageText>
      </UpperWrap>
      <SeatLayout />
    </div>
  );
};

const UpperWrap = styled.div`
  padding: 2.4rem 1.6rem;
  /* background-color: yellow; */
`;

const Label = styled.p`
  margin-bottom: 0.8rem;

  font-size: 1.4rem;
  font-weight: 500;
  opacity: 0.3;
`;

const SeatCountWrap = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const SeatCount = styled.div`
  ${flexSet()}

  border-radius: 0.6rem;

  height: 5.6rem;
  flex: 1;
  background-color: ${(props): string => props.theme.color.grey50};

  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props): string => props.theme.color.grey500};
`;

const AverageText = styled.div`
  ${flexSet()}
  height: 5.6rem;
  margin-top: 1.6rem;

  border: 0.1rem solid ${(props): string => props.theme.color.orange};
  border-radius: 0.8rem;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props): string => props.theme.color.orange};
`;
