import { Input } from 'components/form/atoms/Input';
import { InputLabel } from 'components/form/atoms/InputLabel';
import { InputResetIcon } from 'components/form/atoms/InputResetIcon';
import { TypingCount } from 'components/form/atoms/TypingCount';

import React from 'react';
import {
  InputsWrapper,
  InputGroupWrapper,
  ResetIconWrapper,
  InputLabelWrapper,
  InputInnerWrapper,
  ErrorMessageWrapper,
  SuccessMessageWrapper,
  HelperTextWrapper,
} from './Inputs.styled';
import type { VFC } from 'common/utils/types';

interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: string;
  placeholder: string;
  helperText?: string;
  valueLength: number;
  maximum?: number;
  onClick?: () => void;
  confirmButton?: React.ReactNode;
  error?: React.ReactNode;
  success?: string;
  labelRequired?: boolean;
  typingrequired?: boolean;
}

const Inputs = (
  {
    children,
    placeholder,
    helperText,
    typingrequired,
    maximum,
    valueLength,
    onClick,
    confirmButton,
    labelRequired,
    error,
    success,
    ...others
  }: InputsProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const showResetIcon = valueLength > 0; // 인풋값이 있는 경우에만 리셋 아이콘을 보여줌

  const getMessage = (): JSX.Element | null => {
    if (error) {
      return <ErrorMessageWrapper>{error}</ErrorMessageWrapper>;
    }
    if (success) {
      return <SuccessMessageWrapper>{success}</SuccessMessageWrapper>;
    }
    if (helperText) {
      return <HelperTextWrapper>{helperText}</HelperTextWrapper>;
    }
    return null;
  };

  return (
    <InputsWrapper>
      <InputLabelWrapper>
        <InputLabel labelRequired={labelRequired}>{children}</InputLabel>
        {typingrequired && (
          <TypingCount
            typingrequired={typingrequired}
            current={valueLength}
            maximum={maximum}
          />
        )}
      </InputLabelWrapper>
      <InputGroupWrapper>
        <InputInnerWrapper>
          <Input
            placeholder={placeholder}
            ref={ref}
            isError={Boolean(error)}
            isSuccess={Boolean(success)}
            {...others}
          />
          {showResetIcon && (
            <ResetIconWrapper>
              <InputResetIcon onClick={onClick} />
            </ResetIconWrapper>
          )}
        </InputInnerWrapper>
        {confirmButton}
      </InputGroupWrapper>
      {getMessage()}
    </InputsWrapper>
  );
};

export default React.forwardRef(Inputs);
