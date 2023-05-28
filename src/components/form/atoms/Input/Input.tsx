import { Wrapper, TextInput } from 'components/form/atoms/Input/Input.styled';
import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  isError?: boolean;
  isSuccess?: any;
}

const Input = (
  { placeholder, isError, isSuccess, ...others }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  return (
    <Wrapper isError={isError} isSuccess={isSuccess}>
      <TextInput placeholder={placeholder} ref={ref} {...others} />
    </Wrapper>
  );
};

export default React.forwardRef(Input);
