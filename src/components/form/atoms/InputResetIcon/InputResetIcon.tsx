import { ResetIcon } from './InputResetIcon.styled';
import type { VFC } from 'common/utils/types';

interface InputResetIconProps {
  onClick?: () => void;
}

export const InputResetIcon: VFC<InputResetIconProps> = ({ onClick }) => {
  return <ResetIcon onClick={onClick} />;
};
