import { StoreList } from 'components/store/storeList/StoreList';
import type { VFC } from 'common/utils/types';

export const AllList: VFC = () => {
  return <StoreList queryKey='AllList' />;
};
