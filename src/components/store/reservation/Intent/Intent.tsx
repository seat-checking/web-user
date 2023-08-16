import { Inputs } from 'components/form/molecules/Inputs';
import {
  Form,
  IntentWrapper,
} from 'components/store/reservation/Intent/Intent.styled';
import React from 'react';

export const Intent = () => {
  return (
    <IntentWrapper>
      <Inputs
        labelRequired
        placeholder='사용 목적을 입력해주세요'
        valueLength={0}
      >
        사용목적
      </Inputs>
    </IntentWrapper>
  );
};
