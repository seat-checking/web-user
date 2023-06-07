import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 24rem;
  background: linear-gradient(
    180deg,
    #ffdbc7 18.33%,
    rgba(255, 255, 255, 0s) 93.33%
  );
  opacity: 0.7;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 0.8rem;
  // 가운데 중앙 정렬
  left: 50%;
  transform: translateX(-50%);

  display: flex;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;

  background-color: white;
  opacity: ${({ active }): number => (active ? 1 : 0.5)};

  & + & {
    margin-left: 0.8rem;
  }
`;
