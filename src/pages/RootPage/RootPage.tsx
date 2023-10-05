import { PATH } from 'common/utils/constants';
import { Button } from 'components/form/atoms/Button';
import { LogoBox } from 'pages/LoginPage/LoginPage.styled';
import { NavLink } from 'react-router-dom';
import { ButtonWrapper, LogoWrapper, RootPageWrapper } from './RootPage.styled';
import type { VFC } from 'common/utils/types';

export const RootPage: VFC = () => {
  return (
    <RootPageWrapper>
      <LogoWrapper>
        <LogoBox>썸네일</LogoBox>
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
