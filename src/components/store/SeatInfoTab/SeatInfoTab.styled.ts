import checkIcon from 'assets/icons/check.svg';
import styled, { css } from 'styled-components';
import { flexSet } from 'styles/mixin';

export const UpperWrap = styled.div`
  padding: 2.4rem 1.6rem;
  /* background-color: yellow; */
  /* touch-action: pan-y; */
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

export const BtnsBackground = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 1.6rem;

  background-color: ${({ theme }) => theme.palette.grey[100]};
`;

export const BtnsWrap = styled.div`
  display: flex;

  width: fit-content;

  background-color: white;
  border: 0.1rem solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: 2.7rem;
`;

export const ReservationButton = styled.button<{ isActive: boolean }>`
  padding: 0.4rem 2rem;
  border-radius: 4.8rem;

  background-color: ${({ theme }) => theme.palette.grey[400]};
  color: white;
  display: inline-flex;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    css`
      ::before {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        background-image: url(${checkIcon});
        margin-right: 0.4rem;
      }
    `}
  ${({ isActive }) =>
    !isActive &&
    css`
      background-color: white;
      color: ${({ theme }) => theme.palette.grey[300]};
    `}

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2.4rem;
`;
