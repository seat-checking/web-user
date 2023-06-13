import backIcon from 'assets/icons/backBtn.svg';
import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
`;

export const MypageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
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
`;

export const BackButton = styled.div`
  width: 3.3rem;
  height: 3.3rem;
  background-image: url(${backIcon});
  cursor: pointer;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 9rem;
  margin: 0 auto;
  align-items: center;
  border-bottom: 1px solid #eff0f5;
`;

export const UserInfoImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const UserinfoNickname = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: ${(props): string => props.theme.palette.black.main};
  margin-left: 1.2rem;
`;

export const UserSeatInfoWrapper = styled.div`
  width: 80%;
  background-color: ${(props): string => props.theme.palette.primary.orange};
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
`;

export const UserSeatinfoTitle = styled.div`
  width: 90%;
  font-weight: 400;
  font-size: 12px;
  color: ${(props): string => props.theme.palette.grey[100]};
  margin: 0 auto;
  margin-top: 1.6rem;
`;

export const UserSeatinfoPlace = styled.div`
  width: 90%;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin: 0 auto;
`;
export const CheckOutButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
`;

export const CheckOutButton = styled.div`
  width: 60px;
  height: 31px;
  background: #ffffff;
  border-radius: 104px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SeatPlaceInfo = styled.div`
  width: 90%;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  margin: 0 auto;
  margin-bottom: 1.6rem;
`;
export const MyPageMenuFristWrapper = styled.div`
  width: 80%;
  border-top: 1px solid #eff0f5;
  border-bottom: 1px solid #eff0f5;
  margin: 0 auto;
  margin-top: 1.6rem;
`;
export const MyPageMenuSecondWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 1.6rem;
`;

export const MyPageMenuListWrapper = styled.div`
  display: flex;
  margin-top: 2.8rem;
  margin-bottom: 2.8rem;
  cursor: pointer;
`;

export const MyPageMenuList = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props): string => props.theme.palette.black.main};
  margin-left: 1.6rem;
`;
export const UserInfoIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
