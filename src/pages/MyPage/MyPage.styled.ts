import backIcon from 'assets/icons/backBtn.svg';
import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  width: 100%;
`;

export const MypageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;
export const MyPageTitle = styled.div`
  width: 100%;
  height: 10.8rem;
  font-weight: 500;
  font-size: 2rem;
  color: #1a1c2d;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
`;

export const BackButton = styled.div`
  width: 3.3rem;
  height: 3.3rem;
  background-image: url(${backIcon});
  cursor: pointer;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 9rem;
  margin: 0 auto;
  align-items: center;
  border-bottom: 0.1rem solid #eff0f5;
`;

export const UserInfoImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`;

export const UserinfoNickname = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  color: ${(props): string => props.theme.palette.black.main};
  margin-left: 1.2rem;
`;

export const UserSeatInfoWrapper = styled.div`
  width: 90%;
  background-color: ${(props): string => props.theme.palette.primary.orange};
  border-radius: 0.8rem;
  margin: 0 auto;
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
`;

export const UserSeatinfoTitle = styled.div`
  width: 90%;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${(props): string => props.theme.palette.grey[100]};
  margin: 0 auto;
  margin-top: 1.6rem;
`;

export const UserSeatinfoPlace = styled.div`
  width: 90%;
  font-weight: 700;
  font-size: 2.4rem;
  color: #ffffff;
  margin: 0 auto;
`;
export const CheckOutButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
`;

export const CheckOutButton = styled.div`
  width: 6rem;
  height: 3.1rem;
  background: #ffffff;
  border-radius: 104px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SeatPlaceInfo = styled.div`
  width: 90%;
  font-weight: 400;
  font-size: 1.4rem;
  color: #ffffff;
  margin: 0 auto;
  margin-bottom: 1.6rem;
`;
export const MyPageMenuFristWrapper = styled.div`
  width: 90%;
  border-top: 0.1rem solid #eff0f5;
  margin: 0 auto;
  margin-top: 1.6rem;
`;
export const MyPageMenuSecondWrapper = styled.div`
  width: 90%;
  border-top: 0.1rem solid #eff0f5;
  margin: 0 auto;
  margin-top: 1.6rem;
`;

export const MyPageMenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 5.6rem;

  &:first-child {
    margin-top: 1.2rem;
  }
`;

export const MyPageMenuList = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${(props): string => props.theme.palette.black.main};
`;
export const UserInfoIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;
