import GoogleIconSvg from 'assets/icons/google.svg'; // 경로는 실제 svg 파일 경로에 따라 변경하세요.
import styled from 'styled-components';

export const RootPageWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
`;

export const LogoWrapper = styled.div`
width: 80%
display: flex;
justify-content: center;
margin-top: 6.8rem;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 14.1rem;
`;

export const GoogleIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background-image: url(${GoogleIconSvg});
  margin-right: 2.2rem;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
