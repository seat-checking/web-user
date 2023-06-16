import { Navigation } from 'components/Navigation';

import { ListTab } from 'components/store/ListTab';
import type { VFC } from 'common/utils/types';

/**
 * 가게 목록 페이지 컴포넌트 입니다.
 */
export const StoreListPage: VFC = () => {
  return (
    <>
      <ListTab />
      <Navigation />;
    </>
  );
};
