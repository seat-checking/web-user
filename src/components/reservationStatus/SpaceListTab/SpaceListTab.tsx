import { Tab } from 'components/common/tab/Tab';
import { TabPanel } from 'components/common/tab/TabPanel';
import { Tabs } from 'components/common/tab/Tabs';
import { Participated } from 'components/reservationStatus/Participated';
import { Upcoming } from 'components/reservationStatus/Upcoming';
import { Wrapper } from 'components/reservationStatus/UseListTab/UsageListTab';
import { useListTabStore } from 'store/StoreListStore';
import type { VFC } from 'common/utils/types';

export const SpaceListTab: VFC = () => {
  const { tab, setTab } = useListTabStore((state) => ({
    tab: state.tab,
    setTab: state.setTab,
  }));

  const handleValueChange = (newValue: number) => {
    setTab(newValue);
  };

  return (
    <Wrapper>
      <Tabs value={tab} onChange={handleValueChange}>
        <Tab label='참여 예정' />
        <Tab label='참여 완료' />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <Upcoming />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Participated />
      </TabPanel>
    </Wrapper>
  );
};
