import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 8.4rem;
`;

export const ListTitle = styled.div`
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
