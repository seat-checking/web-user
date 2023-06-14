import styled from 'styled-components';

export const StoreListTitle = styled.div`
  max-width: 67.5rem;
  width: 100%;
  height: 10.8rem;
  font-weight: 500;
  font-size: 2rem;
  color: ${(props): string => props.theme.palette.black.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;
