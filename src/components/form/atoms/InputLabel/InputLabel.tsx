import React from 'react';
import * as S from './InputLabel.styled';

interface InputLabelProps {
  children: string;
  labelRequired?: boolean;
}

export const InputLabel = ({ children, labelRequired }: InputLabelProps) => {
  return (
    <S.Wrapper>
      <S.Label>{children}</S.Label>
      {labelRequired && <S.Required>*</S.Required>}
    </S.Wrapper>
  );
};
