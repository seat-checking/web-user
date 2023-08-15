import {
  Container,
  Label,
  TextRow,
} from 'components/store/StoreInfoTab/StoreInfoTab.styled';
import type { StoreDetaillResponse } from 'api/store/common';

import type { VFC } from 'common/utils/types';

interface StoreInfoTabProps {
  storeInfo: StoreDetaillResponse;
}

/**
 * 가게정보 탭을 클릭했을 때 하단에 보여줄 컴포넌트
 */
export const StoreInfoTab: VFC<StoreInfoTabProps> = ({ storeInfo }) => {
  return (
    <Container>
      <Label>가게정보</Label>
      <TextRow>
        <div className='label'>가게위치</div>
        {storeInfo.location}
      </TextRow>
      <TextRow>
        <div className='label'>운영시간</div>
        {storeInfo.monOpenTime} ~ {storeInfo.monCloseTime}
      </TextRow>
      <TextRow>
        <div className='label'>휴무일</div>
        {storeInfo.dayOff.join(', ')}
      </TextRow>
      <TextRow>
        <div className='label'>전화번호</div>
        {storeInfo.telNum}
      </TextRow>
    </Container>
  );
};
