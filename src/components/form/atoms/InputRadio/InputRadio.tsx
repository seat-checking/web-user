import React from 'react';
import { Input, InputRadioWrapper } from './InputRadio.styled';
import type { InputHTMLAttributes } from 'react';

type InputRadioProps = InputHTMLAttributes<HTMLInputElement>;

const InputRadio = (
  { ...others }: InputRadioProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  return (
    <InputRadioWrapper>
      <Input type='radio' ref={ref} {...others} />
    </InputRadioWrapper>
  );
};

export default React.forwardRef(InputRadio);
