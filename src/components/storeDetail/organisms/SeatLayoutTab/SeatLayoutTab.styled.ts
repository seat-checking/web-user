import styled from 'styled-components';
import { flexSet } from 'styles/mixin';

export const UpperWrap = styled.div`
  padding: 2.4rem 1.6rem;
  /* background-color: yellow; */
`;

export const Label = styled.p`
  margin-bottom: 0.8rem;

  font-size: 1.4rem;
  font-weight: 500;
  opacity: 0.3;
`;

export const SeatCountWrap = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const SeatCount = styled.div`
  ${flexSet()}

  border-radius: 0.6rem;

  height: 5.6rem;
  flex: 1;
  background-color: ${(props): string => props.theme.palette.grey[50]};

  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props): string => props.theme.palette.grey[500]};
`;

export const AverageText = styled.div`
  ${flexSet()}
  height: 5.6rem;
  margin-top: 1.6rem;

  border: 0.1rem solid ${(props): string => props.theme.palette.primary.orange};
  border-radius: 0.8rem;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props): string => props.theme.palette.primary.orange};
`;
