import { SeatLayout } from 'components/store/SeatLayout/SeatLayout';
import {
  AverageText,
  Label,
  SeatCount,
  SeatCountWrap,
  UpperWrap,
} from 'components/store/SeatLayoutTab/SeatLayoutTab.styled';
import type { StoreDetaillResponse } from 'api/store/store';

import type { VFC } from 'common/utils/types';

interface SeatLayoutTabProps {
  storeInfo: StoreDetaillResponse;
}

/**
 * 좌석정보 탭을 클릭했을 때 하단에 보여줄 컴포넌트
 */
export const SeatLayoutTab: VFC<SeatLayoutTabProps> = ({ storeInfo }) => {
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
