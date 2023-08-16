import styled from 'styled-components';

export const ReservationStatus = styled.div`
  width: 7.9rem;
  height: 2.9rem;
  border-radius: 0.4rem;
  border: 0.1rem solid ${(props): string => props.theme.palette.grey[300]};
  background-color: ${(props): string => props.theme.palette.grey[100]};
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props): string => props.theme.palette.grey[500]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
