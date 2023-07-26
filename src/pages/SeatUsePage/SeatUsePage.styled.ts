import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
`;

export const ReservationPageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;
export const ReservationPageTitle = styled.div`
  width: 100%;
  height: 10.8rem;
  font-weight: 500;
  font-size: 2rem;
  color: ${(props): string => props.theme.palette.black.main};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
`;

export const NextButton = styled.div`
  width: 2.8rem;
  color: ${(props): string => props.theme.palette.primary.orange};
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
`;
