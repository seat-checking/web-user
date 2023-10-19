import { LoginForm } from 'components/form/organisms/LoginForm';
import { Logo } from 'pages/RootPage/RootPage.styled';
import { useNavigate } from 'react-router-dom';
import {
  BackButtonIcon,
  LoginPageHeader,
  LoginPageWrapper,
  LogoWrapper,
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
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <LoginForm />
    </LoginPageWrapper>
  );
};
