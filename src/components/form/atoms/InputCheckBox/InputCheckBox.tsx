import { forwardRef } from 'react';
import { InputCheckBoxWrapper, Input } from './InputCheckBox.styled';
import type { Ref } from 'react';
import type React from 'react';

type InputCheckBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputCheckBox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputCheckBoxProps
> = ({ ...others }: InputCheckBoxProps, ref: Ref<HTMLInputElement>) => {
  return (
    <InputCheckBoxWrapper>
      <Input type='checkbox' ref={ref} {...others} />
    </InputCheckBoxWrapper>
  );
};

export default forwardRef(InputCheckBox);
