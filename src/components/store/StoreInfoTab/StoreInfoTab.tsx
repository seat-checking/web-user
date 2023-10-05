import {
  Container,
  DayBox,
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
        {storeInfo.address} {storeInfo.detailAddress}
      </TextRow>
      <TextRow>
        <div className='label'>전화번호</div>
        {storeInfo.detailAddress}
      </TextRow>
      <TextRow>
        <div className='label'>휴무일</div>
        {storeInfo.dayOff.join(', ')}
      </TextRow>
      <TextRow>
        <div className='label'>운영시간</div>
        <div className='times'>
          <DayBox>
            월: {storeInfo.monOpenTime} - {storeInfo.monCloseTime}
          </DayBox>
          <DayBox>
            화: {storeInfo.tueOpenTime} - {storeInfo.tueCloseTime}
          </DayBox>
          <DayBox>
            수: {storeInfo.wedOpenTime} - {storeInfo.wedCloseTime}
          </DayBox>
          <DayBox>
            목: {storeInfo.thuOpenTime} - {storeInfo.thuCloseTime}
          </DayBox>
          <DayBox>
            금: {storeInfo.friOpenTime} - {storeInfo.friCloseTime}
          </DayBox>
          <DayBox>
            토: {storeInfo.satOpenTime} - {storeInfo.satCloseTime}
          </DayBox>
          <DayBox>
            일: {storeInfo.sunOpenTime} - {storeInfo.sunCloseTime}
          </DayBox>
        </div>
      </TextRow>
    </Container>
  );
};
