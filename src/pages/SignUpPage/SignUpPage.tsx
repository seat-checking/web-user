import { SignUpForm } from 'components/form/organisms/SignUpForm';
import {
  ProgressBar,
  ProgressBarInner,
  SignUpPageTitle,
  SignUpPageWrapper,
} from './SignUpPage.styled';
import type { VFC } from 'common/utils/types';

export const SignUpPage: VFC = () => {
  return (
    <SignUpPageWrapper>
      <SignUpPageTitle>회원가입</SignUpPageTitle>
      <ProgressBar>
        <ProgressBarInner />
        <ProgressBarInner />
      </ProgressBar>
      <SignUpForm />
    </SignUpPageWrapper>
  );
};
