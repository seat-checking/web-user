import { MemberInfoForm } from 'components/form/organisms/MemberInfoForm';
import { ProgressBar } from 'pages/SignUpPage/SignUpPage.styled';

import {
  MemberInfoPageTitle,
  MemberInfoPageWrapper,
  ProgressBarInner,
} from './MemberInfoPage.styled';
import type { VFC } from 'common/utils/types';

export const MemberInfoPage: VFC = () => {
  return (
    <MemberInfoPageWrapper>
      <MemberInfoPageTitle>회원 정보 입력</MemberInfoPageTitle>
      <ProgressBar>
        <ProgressBarInner />
      </ProgressBar>
      <MemberInfoForm />
    </MemberInfoPageWrapper>
  );
};
