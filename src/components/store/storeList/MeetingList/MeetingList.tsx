import { StoreList } from 'components/store/storeList/StoreList';
import type { VFC } from 'common/utils/types';

export const MeetingList: VFC = () => {
  return <StoreList category='모임' queryKey='AllList' />;
};
