import { type VFC } from 'common/utils/types';

import { SomeComponent } from 'pages/Example/components';
import { useSomeHook } from 'pages/Example/hooks';

/**
 * Example 컴포넌트입니다
 */

export const Example: VFC = () => {
  const { count, handleClick } = useSomeHook();

  return (
    <>
      <SomeComponent text={count} func={handleClick} />
      <div>
        <br />
      </div>
    </>
  );
};
