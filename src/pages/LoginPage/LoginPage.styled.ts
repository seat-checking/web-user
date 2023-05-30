import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
`;

export const LoginPageHeader = styled.div`
  width: 80%;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`;

export const BackButtonIcon = styled.div`
  width: 0.8rem;
  height: 1.6rem;
  background-image: url(./images/backBtn.png);
  cursor: pointer;
`;

export const LogoBox = styled.div`
  width: 23.3rem;
  height: 23.3rem;
  margin: 0 auto;
  margin-top: 3.2rem;
  margin-bottom: 9rem;
  background-color: ${(porps) => porps.theme.palette.grey[200]};
`;
