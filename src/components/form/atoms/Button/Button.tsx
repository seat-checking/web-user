import * as S from './Button.styled';
import type { VFC } from 'common/utils/types';

interface ButtonProps {
  children: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  border?: string;
}

export const Button: VFC<ButtonProps> = ({
  children,
  backgroundColor,
  color,
  fontSize,
  border,
}) => {
  return (
    <S.Wrapper>
      <S.Button style={{ backgroundColor, color, fontSize, border }}>
        {children}
      </S.Button>
    </S.Wrapper>
  );
};
