import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  max-width: 67.5rem;
  width: 100%;
  margin-top: 20rem;
`;

// 스피닝 컴포넌트 스타일 정의
export const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff8d4e;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${spinAnimation} 1s linear infinite;
  margin: 0 auto;
`;
