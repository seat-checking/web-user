import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';

import { HistoryTab } from 'components/reservationStatus/HistoryTab';

import {
  ListTitle,
  Wrapper,
} from 'components/reservationStatus/ListTab/ListTab.styled';
import { WaitingTab } from 'components/reservationStatus/WaitingTab';
import { useTabStore } from 'store/reservationStatusStore';

import type { VFC } from 'common/utils/types';

export const ListTab: VFC = () => {
  const { tab, setTab } = useTabStore((state) => ({
    tab: state.tab,
    setTab: state.setTab,
  }));

  const handleValueChange = (newValue: number) => {
    setTab(newValue);
  };

  return (
    <Wrapper>
      <ListTitle>예약 현황</ListTitle>
      <Tabs value={tab} onChange={handleValueChange}>
        <Tab label='예약 대기 중' />
        <Tab label='예약 내역' />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <WaitingTab />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <HistoryTab />
      </TabPanel>
    </Wrapper>
  );
};
