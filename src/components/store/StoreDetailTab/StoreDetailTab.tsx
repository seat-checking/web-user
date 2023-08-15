import { Spinner } from 'components/layout/Spinner';
import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';
import { Wrapper } from 'components/store/ListTab/ListTab.styled';
import { SeatLayoutTab } from 'components/store/SeatLayoutTab/SeatLayoutTab';
import { StoreInfoTab } from 'components/store/StoreInfoTab/StoreInfoTab';
import { useState } from 'react';
import type { StoreDetaillResponse } from 'api/store/storeApi';
import type { VFC } from 'common/utils/types';

interface StoreDetailTabProps {
  storeInfo: StoreDetaillResponse | null;
}

export const StoreDetailTab: VFC<StoreDetailTabProps> = ({ storeInfo }) => {
  const [value, setValue] = useState(0);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <Tabs value={value} onChange={handleValueChange} withOutBorderTop>
        <Tab label='죄석정보' />
        <Tab label='가게정보' />
      </Tabs>
      {storeInfo === null ? (
        <Spinner />
      ) : (
        <>
          <TabPanel value={value} index={0}>
            <SeatLayoutTab storeInfo={storeInfo} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StoreInfoTab storeInfo={storeInfo} />
          </TabPanel>
        </>
      )}
    </Wrapper>
  );
};
