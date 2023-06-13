import styled from 'styled-components';

export const StoreListTitle = styled.div`
  max-width: 67.5rem;
  width: 100%;
  height: 10.8rem;
  font-weight: 500;
  font-size: 2rem;
  color: ${(porps): string => porps.theme.palette.black.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;
