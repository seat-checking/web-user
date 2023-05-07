import { styled } from 'styled-components';
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

const Container = styled.div`
  padding: 1.6rem;

  background-color: ${(props): string => props.theme.color.grey50};
`;

const Label = styled.p`
  margin-bottom: 1.6rem;

  font-size: 1.6rem;
  font-weight: 700;
`;

const TextRow = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  .label {
    flex: 1;
    opacity: 0.5;
  }
  & + & {
    margin-top: 0.8rem;
  }
`;
