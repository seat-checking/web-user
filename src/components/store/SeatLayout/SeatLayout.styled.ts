import styled from 'styled-components';

export const Container = styled.div`
  height: 38rem;
  background-color: ${(props): string => props.theme.palette.grey[50]};
`;
