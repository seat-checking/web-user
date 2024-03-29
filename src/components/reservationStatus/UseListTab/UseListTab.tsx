import { Tab } from 'components/common/tab/Tab';
import { TabPanel } from 'components/common/tab/TabPanel';
import { Tabs } from 'components/common/tab/Tabs';

import { HistoryTab } from 'components/reservationStatus/HistoryTab';
import { Wrapper } from 'components/reservationStatus/UseListTab/UsageListTab';
import { UseNow } from 'components/reservationStatus/UseNow';

import { useState } from 'react';
import type { VFC } from 'common/utils/types';

export const UseListTab: VFC = () => {
  const [tab, setTab] = useState<number>(0);

  const handleValueChange = (newValue: number) => {
    setTab(newValue);
  };

  return (
    <Wrapper>
      <Tabs value={tab} onChange={handleValueChange}>
        <Tab label='예약' />
        <Tab label='바로 사용' />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <HistoryTab />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <UseNow />
      </TabPanel>
    </Wrapper>
  );
};
