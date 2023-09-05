import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 1.6rem;

  background-color: ${(props): string => props.theme.palette.grey[50]};
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
export const DayBox = styled.div`
  margin-bottom: 0.8rem;
`;
