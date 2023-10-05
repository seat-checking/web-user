import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${(props): string => props.theme.palette.grey[50]};
`;
