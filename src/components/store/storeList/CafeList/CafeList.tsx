import { StoreList } from 'components/store/storeList/StoreList';
import type { VFC } from 'common/utils/types';

export const CafeList: VFC = () => {
  return <StoreList category='카페' queryKey='CafeList' />;
};
