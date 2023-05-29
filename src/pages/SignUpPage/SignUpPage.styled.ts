import styled from 'styled-components';

export const SignUpPageWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
`;
export const SignUpPageTitle = styled.div`
  width: 100%;
  height: 10.8rem;
  font-weight: 500;
  font-size: 2rem;
  color: #1a1c2d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBar = styled.div`
  width: 100%
  height: 0.4rem;
  display: flex;
  margin-bottom:4.0rem;
`;
export const ProgressBarInner = styled.div`
  width: 50%;
  height: 0.4rem;
  background: ${(porps): string => porps.theme.palette.primary.main};

  &:nth-child(2) {
    background: ${(porps): string => porps.theme.palette.grey[50]};
  }
`;
