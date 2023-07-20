import { LoginForm } from 'components/form/organisms/LoginForm';

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

  const handleback = (): void => {
    navigate(-1);
  };
  return (
    <LoginPageWrapper>
      <LoginPageHeader>
        <BackButtonIcon onClick={handleback} />
      </LoginPageHeader>
      <LogoBox>로고 썸네일 등 </LogoBox>
      <LoginForm />
    </LoginPageWrapper>
  );
};
