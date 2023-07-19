import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';

import { HistoryTab } from 'components/reservationStatus/HistoryTab';

import {
  ListTitle,
  Wrapper,
} from 'components/reservationStatus/ListTab/ListTab.styled';
import { WaitingTab } from 'components/reservationStatus/WaitingTab';

import { useState } from 'react';

import type { VFC } from 'common/utils/types';

export const ListTab: VFC = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <ListTitle>예약 현황</ListTitle>
      <Tabs value={value} onChange={handleValueChange}>
        <Tab label='예약 대기 중' />
        <Tab label='예약 내역' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <WaitingTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HistoryTab />
      </TabPanel>
    </Wrapper>
  );
};
