import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';
import { Wrapper } from 'components/store/ListTab/ListTab.styled';
import { SeatLayoutTab } from 'components/store/SeatLayoutTab/SeatLayoutTab';
import { StoreInfoTab } from 'components/store/StoreInfoTab/StoreInfoTab';
import { useState } from 'react';

export const StoreDetailTab = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <Tabs value={value} onChange={handleValueChange}>
        <Tab label='죄석정보' />
        <Tab label='가게정보' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SeatLayoutTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StoreInfoTab />
      </TabPanel>
    </Wrapper>
  );
};
