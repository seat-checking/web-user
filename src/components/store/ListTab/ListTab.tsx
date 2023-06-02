import { AllListItem } from 'components/item/AllListItem';
import { CafeListItem } from 'components/item/CafeListItem';
import { FoodListItem } from 'components/item/FoodListItem';
import { MeetingListItem } from 'components/item/MeetingListItem';
import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';
import { AllList } from 'components/store/storeList/AllList';
import { CafeList } from 'components/store/storeList/CafeList';
import { FoodList } from 'components/store/storeList/FoodList';
import { MeetingList } from 'components/store/storeList/MeetingList';
import React, { useState } from 'react';

import { Wrapper } from './ListTab.styled';
import type { VFC } from 'common/utils/types';

export const ListTab: VFC = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <Tabs value={value} onChange={handleValueChange}>
        <Tab label='전체' />
        <Tab label='음식점' />
        <Tab label='카페' />
        <Tab label='모임' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AllList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FoodList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CafeList />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MeetingList />
      </TabPanel>
    </Wrapper>
  );
};
