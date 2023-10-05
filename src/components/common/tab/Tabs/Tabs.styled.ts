import styled from 'styled-components';

interface WrapperProps {
  withOutBorderTop?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: 67.5rem;
  display: flex;
  flex-direction: row;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grey[50]};
  border-top: ${({ withOutBorderTop, theme }) =>
    withOutBorderTop ? 'none' : `0.1rem solid ${theme.palette.grey[50]}`};
`;
