import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isError?: boolean; isSuccess: boolean }>`
  max-width: 67.5rem;
  width: 100%;
  height: 4.1rem;
  margin: 0 auto;
  margin-top: 0.9rem;
  border-bottom: 0.1rem solid #d8d9e1;

  ${({ isError, theme }) =>
    isError &&
    css`
      border-color: ${theme.palette.error.main};
    `}
`;

export const TextInput = styled.input`
  width: 100%;
  height: 2.4rem;
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 1rem;
`;
