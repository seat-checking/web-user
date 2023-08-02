import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';
import { AllList } from 'components/store/storeList/AllList';
import { CafeList } from 'components/store/storeList/CafeList';
import { FoodList } from 'components/store/storeList/FoodList';
import { MeetingList } from 'components/store/storeList/MeetingList';

import { useListTabStore } from 'store/StoreListStore';
import { StoreListTitle, Wrapper } from './ListTab.styled';
import type { VFC } from 'common/utils/types';

export const ListTab: VFC = () => {
  const { tab, setTab } = useListTabStore((state) => ({
    tab: state.tab,
    setTab: state.setTab,
  }));

  const handleValueChange = (newValue: number) => {
    setTab(newValue);
  };
  return (
    <Wrapper>
      <StoreListTitle>가게목록</StoreListTitle>
      <Tabs value={tab} onChange={handleValueChange}>
        <Tab label='전체' />
        <Tab label='음식점' />
        <Tab label='카페' />
        <Tab label='모임' />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <AllList />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <FoodList />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <CafeList />
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <MeetingList />
      </TabPanel>
    </Wrapper>
  );
};
