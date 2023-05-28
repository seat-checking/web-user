import {
  Label,
  Wrapper,
  Required,
} from 'components/form/atoms/InputLabel/InputLabel.styled';
import React from 'react';

interface InputLabelProps {
  children: string;
  labelRequired?: boolean;
}

export const InputLabel = ({ children, labelRequired }: InputLabelProps) => {
  return (
    <Wrapper>
      <Label>{children}</Label>
      {labelRequired && <Required>*</Required>}
    </Wrapper>
  );
};
