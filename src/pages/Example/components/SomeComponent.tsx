import { type VFC } from 'common/utils/types';

interface Props {
  text: string | number;
  func: () => void;
}

/**
 * 컴포넌트 입니다.
 *
 * - `text` - string | number
 * - `func` - ()=>void
 *
 */
export const SomeComponent: VFC<Props> = ({ text, func }) => {
  return (
    <button type='button' onClick={func}>
      {text}
    </button>
  );
};
