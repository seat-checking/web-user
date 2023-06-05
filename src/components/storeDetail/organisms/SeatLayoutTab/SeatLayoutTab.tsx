import { SeatLayout } from 'components/storeDetail/molecules/SeatLayout/SeatLayout';

import {
  AverageText,
  SeatCount,
  SeatCountWrap,
  UpperWrap,
} from 'components/storeDetail/organisms/SeatLayoutTab/SeatLayoutTab.styled';
import { Label } from 'components/storeDetail/organisms/StoreInfoTab/StoreInfoTab.styled';
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
