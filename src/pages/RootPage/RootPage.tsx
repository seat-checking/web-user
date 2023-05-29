import { Button } from 'components/form/atoms/Button';
import { LogoBox } from 'pages/LoginPage/LoginPage.styled';
import React from 'react';
import { ButtonWrapper, LogoWrapper, RootPageWrapper } from './RootPage.styled';
import type { VFC } from 'common/utils/types';

export const RootPage: VFC = () => {
  return (
    <RootPageWrapper>
      <LogoWrapper>
        <LogoBox>썸네일</LogoBox>
      </LogoWrapper>
      <ButtonWrapper>
        <Button>아이디 로그인</Button>
        <Button
          border='1px solid #EFF0F5'
          backgroundColor='#FFFF'
          color='#505462'
        >
          구글 아이디로 로그인하기
        </Button>
        <Button
          border='1px solid #FF8D4E'
          backgroundColor='#FFFF'
          color='#FF8D4E'
        >
          회원가입
        </Button>
      </ButtonWrapper>
    </RootPageWrapper>
  );
};
