import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.6rem;

  background-color: ${(props): string => props.theme.color.grey50};
`;

export const Label = styled.p`
  margin-bottom: 1.6rem;

  font-size: 1.6rem;
  font-weight: 700;
`;

export const TextRow = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  .label {
    flex: 1;
    opacity: 0.5;
  }
  & + & {
    margin-top: 0.8rem;
  }
`;
