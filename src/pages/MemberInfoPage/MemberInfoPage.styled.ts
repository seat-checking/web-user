import styled from 'styled-components';

export const MemberInfoPageWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
`;

export const MemberInfoPageTitle = styled.div`
  width: 100%;
  height: 10.8rem;
  font-weight: 500;
  font-size: 2rem;
  color: ${(porps): string => porps.theme.palette.black.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBarInner = styled.div`
  width: 100%;
  height: 0.4rem;
  background: ${(porps): string => porps.theme.palette.primary.orange};
`;
