import GoogleIconSvg from 'assets/icons/google.svg'; // 경로는 실제 svg 파일 경로에 따라 변경하세요.
import styled from 'styled-components';

export const GoogleButtonWrapper = styled.div`
  width: 100%;
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  height: 5.6rem;
  border-radius: 0.8rem;
  cursor: pointer;
  color: ${(props): string => props.theme.palette.grey[500]};
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  border: 1px solid #eff0f5;
  background: #ffffff;
`;

export const GoogleIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background-image: url(${GoogleIconSvg});
  margin-right: 2.2rem;
`;
