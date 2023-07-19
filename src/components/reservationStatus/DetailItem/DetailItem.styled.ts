import styled from 'styled-components';

interface CircleProps {
  isActive: boolean;
}

export const ReservationDetailWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ReservationDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export const ListTitle = styled.div`
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
export const ReservationContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const ReservationStatus = styled.div`
  width: 7.9rem;
  height: 2.9rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #ff8d4e;
  background-color: rgba(255, 141, 78, 0.15);
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props): string => props.theme.palette.primary.orange};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
`;
export const ReservationName = styled.div`
  color: #505462;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Circle = styled.div<CircleProps>`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.6rem;
  background-color: background-color: ${(props): string =>
    props.isActive ? props.theme.palette.primary.orange : 'gray'};
  margin-left: 0.8rem;
  margin-right: 0.4rem;
`;

export const ReservationSeatNumber = styled.div`
  color: #505462;
  font-size: 1.6rem;
  font-weight: 400;
`;
export const ContentMainTextWrapper = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${(props): string => (props.gap ? `${props.gap}rem` : '2.8rem')};
  width: 90%;
  margin: 0 auto;
`;

export const ContentMain = styled.div`
  width: 100%;
  margin-top: 0.8rem;
  height: 13.2rem;
  border-radius: 0.6rem;
  background-color: ${(props): string => props.theme.palette.grey[100]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${ContentMainTextWrapper}:nth-child(-n+3) {
    margin-bottom: 0.8rem;
  }
`;

export const ContentMainText = styled.div`
  color: #505462;
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ContentSubText = styled.div`
  color: #505462;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ContentMainTextCircle = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.6rem;
  background-color: #505462;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;
