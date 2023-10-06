import BellIcon from 'assets/icons/bell.svg';
import infoIcon from 'assets/icons/infoIcon.svg';
import logOutIcon from 'assets/icons/log-out.svg';
import userCheckIcon from 'assets/icons/userCheckIcon.svg';
import UserImg from 'assets/images/avatar.png';

import { Navigation } from 'components/Navigation';
import { Modal } from 'components/common/Modal';
import {
  ModaMainText,
  ModaSubText,
  ModalButton,
  ModalButtonWrapper,
  ModalCancel,
  ModalContent,
} from 'components/store/reservation/Intent/Intent.styled';
import {
  CheckOutButton,
  CheckOutButtonWrapper,
  ModalNotificationrText,
  MyPageMenuFristWrapper,
  MyPageMenuList,
  MyPageMenuListWrapper,
  MyPageTitle,
  MyPageWrapper,
  MypageHeader,
  SeatPlaceInfo,
  UserInfoIcon,
  UserInfoImg,
  UserInfoWrapper,
  UserSeatInfoWrapper,
  UserSeatinfoPlace,
  UserSeatinfoTitle,
  UserinfoNickname,
} from 'pages/MyPage/MyPage.styled';
import { useState } from 'react';
import type { VFC } from 'common/utils/types';

export const MyPage: VFC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLogOut = () => {}; // TODO: 로그아웃 api 연동

  return (
    <MyPageWrapper>
      <MypageHeader>
        <MyPageTitle>마이페이지</MyPageTitle>
      </MypageHeader>
      <UserInfoWrapper>
        <UserInfoImg src={UserImg} />
        <UserinfoNickname>닉네임</UserinfoNickname>
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
          <UserInfoIcon src={infoIcon} />
          <MyPageMenuList>이용 약관</MyPageMenuList>
        </MyPageMenuListWrapper>
        <MyPageMenuListWrapper>
          <UserInfoIcon src={userCheckIcon} />
          <MyPageMenuList>개인정보 처리 방침</MyPageMenuList>
        </MyPageMenuListWrapper>
        <MyPageMenuListWrapper onClick={openModal}>
          <UserInfoIcon src={logOutIcon} />
          <MyPageMenuList>로그아웃</MyPageMenuList>
        </MyPageMenuListWrapper>
      </MyPageMenuFristWrapper>
      <Navigation />
      {modalOpen && (
        <Modal>
          <ModalContent>
            <ModaMainText>사용신청</ModaMainText>
            <ModaSubText>로그아웃 하시겠습니까?</ModaSubText>
            <ModalNotificationrText>
              로그아웃하면 알림을 확인할 수 없어요.
            </ModalNotificationrText>
          </ModalContent>
          <ModalButtonWrapper>
            <ModalCancel onClick={closeModal}>취소</ModalCancel>
            <ModalButton onClick={handleLogOut}>로그아웃</ModalButton>
          </ModalButtonWrapper>
        </Modal>
      )}
    </MyPageWrapper>
  );
};
