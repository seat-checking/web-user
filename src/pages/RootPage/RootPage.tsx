import { PATH } from 'common/utils/constants';
import { Button } from 'components/form/atoms/Button';
import { NavLink } from 'react-router-dom';
import {
  ButtonWrapper,
  Logo,
  LogoWrapper,
  RootPageWrapper,
} from './RootPage.styled';
import type { VFC } from 'common/utils/types';

export const RootPage: VFC = () => {
  return (
    <RootPageWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ButtonWrapper>
        <NavLink to={`/${PATH.login}`}>
          <Button>아이디 로그인</Button>
        </NavLink>
        <NavLink to={`/${PATH.signUp}`}>
          <Button
            border='1px solid #FF8D4E'
            backgroundColor='#FFFF'
            color='#FF8D4E'
          >
            회원가입
          </Button>
        </NavLink>
      </ButtonWrapper>
    </RootPageWrapper>
  );
};
