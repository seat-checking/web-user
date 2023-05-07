import { styled } from 'styled-components';
import type { VFC } from 'common/utils/types';

/**
 * 좌석 배치도 컴포넌트
 * 아직 디자인이 나오지 않음
 */
export const SeatLayout: VFC = () => {
  return <Container />;
};

const Container = styled.div`
  height: 38rem;
  background-color: ${(props): string => props.theme.color.grey50};
`;
