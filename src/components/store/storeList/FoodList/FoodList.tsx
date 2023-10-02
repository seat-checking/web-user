import { StoreList } from 'components/store/storeList/StoreList';
import type { VFC } from 'common/utils/types';

export const FoodList: VFC = () => {
  return <StoreList category='음식점' queryKey='AllList' />;
};
