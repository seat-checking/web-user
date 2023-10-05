import { Tab } from 'components/common/tab/Tab';
import { TabPanel } from 'components/common/tab/TabPanel';
import { Tabs } from 'components/common/tab/Tabs';
import { StoreList } from 'components/store/StoreList';
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
      <StoreListTitle>플레이스</StoreListTitle>
      <Tabs value={tab} onChange={handleValueChange}>
        <Tab label='전체' />
        <Tab label='음식점' />
        <Tab label='카페' />
        <Tab label='모임' />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <StoreList queryKey='AllList' />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <StoreList category='음식점' queryKey='FoodList' />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <StoreList category='카페' queryKey='CafeList' />
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <StoreList category='모임' queryKey='WaitingList' />
      </TabPanel>
    </Wrapper>
  );
};
