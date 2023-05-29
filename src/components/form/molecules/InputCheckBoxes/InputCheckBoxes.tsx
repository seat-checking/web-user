import { InputCheckBox } from 'components/form/atoms/InputCheckBox';

import { InputLabel } from 'components/form/atoms/InputLabel';
import { InputCheckBoxesWrapper } from './InputCheckBoxes.styled';
import type { VFC } from 'common/utils/types';
import type React from 'react';

interface InputCheckBoxesWrapperProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: string;
  ref: React.Ref<HTMLInputElement>;
}

export const InputCheckBoxes: VFC<InputCheckBoxesWrapperProps> = ({
  children,
  ref,
  ...others
}) => {
  return (
    <InputCheckBoxesWrapper>
      <InputCheckBox ref={ref} {...others} />
      <InputLabel>{children}</InputLabel>
    </InputCheckBoxesWrapper>
  );
};
