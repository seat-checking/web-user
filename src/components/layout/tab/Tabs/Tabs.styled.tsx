import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 675px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[50]};
`;
