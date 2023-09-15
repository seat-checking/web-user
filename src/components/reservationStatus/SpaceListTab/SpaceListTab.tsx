import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';
import { HistoryTab } from 'components/reservationStatus/HistoryTab';
import { Wrapper } from 'components/reservationStatus/UseListTab/UsageListTab';
import { UseNowTab } from 'components/reservationStatus/UseNow';

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
        <Tab label='대기중' />
        <Tab label='사용 내역' />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <HistoryTab />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <UseNowTab />
      </TabPanel>
    </Wrapper>
  );
};
