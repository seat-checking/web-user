import errorIcon from 'assets/icons/error.svg';
import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  padding-top: 5rem;
`;

export const ErrorMessageWrapper = styled.div`
  width: 100%;
  height: 1.7rem;
  display: flex;
  align-items: center; 
  justify-content: center; /
`;

export const ErrorIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${errorIcon});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.4rem;
`;

export const ErrorMessage = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${(porps): string => porps.theme.palette.grey[500]};
`;
