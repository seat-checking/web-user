import logoIcon from 'assets/icons/logo.svg';
import styled from 'styled-components';

export const RootPageWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20rem;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 14.1rem;
`;

export const Logo = styled.div`
  background-image: url(${logoIcon});
  width: 40rem;
  height: 10rem;
  background-repeat: no-repeat;
  background-size: 40rem 5rem;
  padding-right: 0.5rem;
  @media (max-width: 393px) {
    background-size: 30rem 5rem;
    width: 30rem;
    height: 10rem;
  }
`;
