import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 67.5rem;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[50]};
  border-top: 1px solid ${({ theme }) => theme.palette.grey[50]};
`;
