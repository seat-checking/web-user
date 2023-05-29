import { ButtonBox, Wrapper } from 'components/form/atoms/Button/Button.styled';
import type { VFC } from 'common/utils/types';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  border?: string;
  disabled?: boolean;
}

export const Button: VFC<ButtonProps> = ({
  children,
  backgroundColor,
  color,
  fontSize,
  border,
  disabled,
}) => {
  return (
    <Wrapper>
      <ButtonBox
        style={{ backgroundColor, color, fontSize, border }}
        disabled={disabled}
      >
        {children}
      </ButtonBox>
    </Wrapper>
  );
};
