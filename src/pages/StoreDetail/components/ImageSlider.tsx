import { styled } from 'styled-components';
import type { VFC } from 'common/utils/types';

/**
 * 이미지 슬라이더 컴포넌트 (미작성))
 */
export const ImageSlider: VFC = () => {
  return <Container />;
};

const Container = styled.div`
  width: 100%;
  height: 24rem;
  border: 2px solid black;
  background: linear-gradient(
    180deg,
    #ffdbc7 18.33%,
    rgba(255, 255, 255, 0) 93.33%
  );
  opacity: 0.7;
`;
