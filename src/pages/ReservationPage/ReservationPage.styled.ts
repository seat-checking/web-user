import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${(props): string => props.theme.palette.grey[50]};
  margin-bottom: 1.6rem;
`;

export const ReservationPageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;
export const ReservationPageTitle = styled.div`
  height: 9rem;
  font-weight: 500;
  font-size: 2rem;
  color: #1a1c2d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled.div`
  width: 2.8rem;
  color: ${(props): string => props.theme.palette.primary.orange};
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
`;
