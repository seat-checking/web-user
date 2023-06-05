import { Container } from 'components/storeDetail/molecules/SeatLayout/SeatLayout.styled';
import { Label } from 'components/storeDetail/organisms/SeatLayoutTab/SeatLayoutTab.styled';
import { TextRow } from 'components/storeDetail/organisms/StoreInfoTab/StoreInfoTab.styled';
import type { VFC } from 'common/utils/types';

/**
 * 가게정보 탭을 클릭했을 때 하단에 보여줄 컴포넌트
 */
export const StoreInfoTab: VFC = () => {
  return (
    <Container>
      <Label>가게정보</Label>
      <TextRow>
        <div className='label'>가게위치</div>용산구 산행로 24길-4
      </TextRow>
      <TextRow>
        <div className='label'>운영시간</div>매일 - 오전 9:00 ~ 오후 10:00
      </TextRow>
      <TextRow>
        <div className='label'>휴무일</div>연중무휴
      </TextRow>
      <TextRow>
        <div className='label'>전화번호</div>010-5099-6910
      </TextRow>
    </Container>
  );
};
