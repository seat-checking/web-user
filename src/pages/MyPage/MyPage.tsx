import BellIcon from 'assets/icons/bell.svg';
import checkCircleIcon from 'assets/icons/checkCircleIcon.svg';
import externalLinkIcon from 'assets/icons/externalLinkIcon.svg';
import infoIcon from 'assets/icons/infoIcon.svg';
import listIcon from 'assets/icons/listIcon.svg';
import userCheckIcon from 'assets/icons/userCheckIcon.svg';
import UserIcon from 'assets/icons/userIcon.svg';
import UserImg from 'assets/images/avatar.png';
import { Navigation } from 'components/Navigation';
import {
  CheckOutButton,
  CheckOutButtonWrapper,
  MyPageMenuFristWrapper,
  MyPageMenuList,
  MyPageMenuListWrapper,
  MyPageMenuSecondWrapper,
  MyPageTitle,
  MyPageWrapper,
  MypageHeader,
  NotificationBox,
  NotificationBoxIcon,
  SeatPlaceInfo,
  UserInfoIcon,
  UserInfoImg,
  UserInfoWrapper,
  UserSeatInfoWrapper,
  UserSeatinfoPlace,
  UserSeatinfoTitle,
  UserinfoNickname,
} from 'pages/MyPage/MyPage.styled';
import type { VFC } from 'common/utils/types';

export const MyPage: VFC = () => {
  return (
    <MyPageWrapper>
      <MypageHeader>
        <MyPageTitle>마이페이지</MyPageTitle>
      </MypageHeader>
      <UserInfoWrapper>
        <UserInfoImg src={UserImg} />
        <UserinfoNickname>닉네임</UserinfoNickname>
        <NotificationBox>
          <NotificationBoxIcon src={BellIcon} />
          알림함
        </NotificationBox>
      </UserInfoWrapper>
      <UserSeatInfoWrapper>
        <UserSeatinfoTitle>현재 이용중인 좌석</UserSeatinfoTitle>
        <UserSeatinfoPlace>hspace</UserSeatinfoPlace>
        <CheckOutButtonWrapper>
          <CheckOutButton>퇴실</CheckOutButton>
        </CheckOutButtonWrapper>
        <SeatPlaceInfo>스페이스명 | 142번</SeatPlaceInfo>
      </UserSeatInfoWrapper>
      <MyPageMenuFristWrapper>
        <MyPageMenuListWrapper>
          <UserInfoIcon src={UserIcon} />
          <MyPageMenuList>내 정보 설정</MyPageMenuList>
        </MyPageMenuListWrapper>
        <MyPageMenuListWrapper>
          <UserInfoIcon src={listIcon} />
          <MyPageMenuList>공지사항</MyPageMenuList>
        </MyPageMenuListWrapper>
        <MyPageMenuListWrapper>
          <UserInfoIcon src={externalLinkIcon} />
          <MyPageMenuList>문의하기</MyPageMenuList>
        </MyPageMenuListWrapper>
      </MyPageMenuFristWrapper>
      <MyPageMenuSecondWrapper>
        <MyPageMenuListWrapper>
          <UserInfoIcon src={infoIcon} />
          <MyPageMenuList>이용 약관</MyPageMenuList>
        </MyPageMenuListWrapper>
        <MyPageMenuListWrapper>
          <UserInfoIcon src={userCheckIcon} />
          <MyPageMenuList>개인정보 처리 방침</MyPageMenuList>
        </MyPageMenuListWrapper>
        <MyPageMenuListWrapper>
          <UserInfoIcon src={checkCircleIcon} />
          <MyPageMenuList>정보 동의 설정</MyPageMenuList>
        </MyPageMenuListWrapper>
      </MyPageMenuSecondWrapper>
      <Navigation />
    </MyPageWrapper>
  );
};
