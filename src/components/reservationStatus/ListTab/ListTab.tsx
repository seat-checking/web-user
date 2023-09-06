import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';

import { HistoryTab } from 'components/reservationStatus/HistoryTab';

import {
  ListTitle,
  Wrapper,
} from 'components/reservationStatus/ListTab/ListTab.styled';

import { UseNowTab } from 'components/reservationStatus/UseNow';
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
      <ListTitle>이용 현황</ListTitle>
      <Tabs value={tab} onChange={handleValueChange}>
        <Tab label='예약' />
        <Tab label='바로 사용' />
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
