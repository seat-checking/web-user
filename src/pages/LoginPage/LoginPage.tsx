import { LoginForm } from 'components/form/organisms/LoginForm';
import React from 'react';

import {
  BackButtonIcon,
  LoginPageHeader,
  LoginPageWrapper,
  LogoBox,
} from './LoginPage.styled';
import type { VFC } from 'common/utils/types';

export const LoginPage: VFC = () => {
  return (
    <LoginPageWrapper>
      <LoginPageHeader>
        <BackButtonIcon />
      </LoginPageHeader>
      <LogoBox>로고 썸네일 등 </LogoBox>
      <LoginForm />
    </LoginPageWrapper>
  );
};
