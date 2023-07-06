import {
  Label,
  LabelText,
  RadioInput,
} from 'components/form/atoms/InputRadio/InputRadio.styled';
import { forwardRef } from 'react';
import type { Ref } from 'react';

interface RadioProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string; // radio group 내에서 동일한 이름 사용해야함
  value: string;
  label: string;
  checked?: boolean;
}

/**
 * radio input 컴포넌트 (회원가입 페이지에서 사용)
 */
// eslint-disable-next-line react/display-name
export const InputRadio = forwardRef(
  (
    { id, name, value, label, checked, ...rest }: RadioProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <Label htmlFor={id}>
        <RadioInput
          checked={checked}
          type='radio'
          id={id}
          name={name}
          value={value}
          ref={ref}
          {...rest}
        />
        <LabelText>{label}</LabelText>
      </Label>
    );
  },
);
