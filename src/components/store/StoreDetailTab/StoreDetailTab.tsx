import { Spinner } from 'components/common/Spinner';
import { Tab } from 'components/common/tab/Tab';
import { TabPanel } from 'components/common/tab/TabPanel';
import { Tabs } from 'components/common/tab/Tabs';
import { Wrapper } from 'components/store/ListTab/ListTab.styled';
import { SeatInfoTab } from 'components/store/SeatInfoTab/SeatInfoTab';
import { StoreInfoTab } from 'components/store/StoreInfoTab/StoreInfoTab';
import { useState } from 'react';
import type { StoreDetaillResponse } from 'api/store/common';

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
        <Tab label='좌석 정보' />
        <Tab label='가게 정보' />
      </Tabs>
      {storeInfo === null ? (
        <Spinner />
      ) : (
        <>
          <TabPanel value={value} index={0}>
            <SeatInfoTab storeInfo={storeInfo} storeId={storeInfo.id} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StoreInfoTab storeInfo={storeInfo} />
          </TabPanel>
        </>
      )}
    </Wrapper>
  );
};
