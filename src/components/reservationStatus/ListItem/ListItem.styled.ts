import styled from 'styled-components';

interface CircleProps {
  isActive: boolean;
}

export const ReservationItemWrapper = styled.div`
  max-width: 67.5rem;
  height: 9.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

export const ReservationItemImgWrapper = styled.div`
  margin-left: 1.6rem;
  margin-right: 1.6rem;
`;

export const ReservationItemImg = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 0.6rem;
`;

export const ReservationItemNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ReservationItemName = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  gap: 0.4rem;
  color: ${(props): string => props.theme.palette.black.main};

  @media (max-width: 394px) {
    font-size: 1.3rem; // 화면 넓이가 394px 이하일 때의 폰트 크기
  }
`;

export const ReservationIteminfo = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props): string => props.theme.palette.grey[400]};
  align-self: baseline;
  padding-top: 0.2rem;
`;

export const ReservationItemSeatInfo = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${(props): string => props.theme.palette.black.main};
`;

export const ReservationItemDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1.6rem;
  margin-left: auto;
  line-height: 20px;
`;

export const ReservationItemDate = styled.div`
  font-size: 1.2rem;
  color: ${(props): string => props.theme.palette.grey[300]};
`;

export const ReservationItemTime = styled.div`
  font-size: 1.4rem;
  color: ${(props): string => props.theme.palette.grey[300]};

  @media (max-width: 442px) {
    font-size: 1rem; /* 원하는 폰트 크기로 변경하세요 */
  }
`;

export const Circle = styled.div<CircleProps>`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.6rem;
  background-color: ${(props): string =>
    props.isActive ? props.theme.palette.primary.orange : 'gray'};
`;
