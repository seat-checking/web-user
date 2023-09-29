import {
  AverageText,
  Label,
  SeatCount,
  SeatCountWrap,
  UpperWrap,
} from 'components/store/SeatInfoTab/SeatInfoTab.styled';
import { SeatLayout } from 'components/store/SeatLayout/SeatLayout';
import type { StoreDetaillResponse } from 'api/store/common';

import type { VFC } from 'common/utils/types';

interface SeatInfoTabProps {
  storeInfo: StoreDetaillResponse;
}

/**
 * 좌석정보 탭을 클릭했을 때 하단에 보여줄 컴포넌트
 */
export const SeatInfoTab: VFC<SeatInfoTabProps> = ({ storeInfo }) => {
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
