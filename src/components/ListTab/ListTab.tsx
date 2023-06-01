import { AllListItem } from 'components/item/AllListItem';
import { CafeListItem } from 'components/item/CafeListItem';
import { FoodListItem } from 'components/item/FoodListItem';
import { MeetingListItem } from 'components/item/MeetingListItem';
import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';
import React, { useState } from 'react';

import { Wrapper } from './ListTab.styled';

export const ListTab = () => {
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
        <AllListItem />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FoodListItem />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CafeListItem />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MeetingListItem />
      </TabPanel>
    </Wrapper>
  );
};
