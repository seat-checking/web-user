import { LoginForm } from 'components/form/organisms/LoginForm';

import { Modal } from 'components/layout/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BackButtonIcon,
  LoginPageHeader,
  LoginPageWrapper,
  LogoBox,
} from './LoginPage.styled';
import type { VFC } from 'common/utils/types';

export const LoginPage: VFC = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const handleback = (): void => {
    navigate(-1);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <LoginPageWrapper>
      <LoginPageHeader>
        <BackButtonIcon onClick={handleback} />
      </LoginPageHeader>
      <LogoBox>로고 썸네일 등 </LogoBox>
      <LoginForm />
      <button type='button' onClick={openModal} style={{ fontSize: '40px' }}>
        모달
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        모달창
      </Modal>
    </LoginPageWrapper>
  );
};
