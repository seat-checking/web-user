import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 675px;
  width: 100%;
`;

export const Button = styled.button`
  width: 90%;
  height: 56px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: ${(props): string => props.theme.palette.grey[400]};
`;
