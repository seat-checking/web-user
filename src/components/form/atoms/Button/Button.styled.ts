import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
  text-align: center;
`;

export const ButtonBox = styled.button`
  width: 90%;
  height: 5.6rem;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  color: ${(props): string => props.theme.palette.white.main};
  background-color: ${(props): string => props.theme.palette.primary.orange};

  &:disabled {
    pointer-events: none;
    color: ${(props): string => props.theme.palette.grey[400]};
    background-color: ${(props): string => props.theme.palette.grey[100]};
  }
`;
