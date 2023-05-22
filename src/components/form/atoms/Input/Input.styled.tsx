import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isError?: boolean; isSuccess: boolean }>`
  max-width: 675px;
  width: 100%;
  height: 41px;
  margin: 0 auto;
  border-bottom: 1px solid #d8d9e1;

  ${({ isError, theme }) =>
    isError &&
    css`
      border-color: ${theme.palette.error.main};
    `}
`;

export const TextInput = styled.input`
  width: 100%;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
`;
