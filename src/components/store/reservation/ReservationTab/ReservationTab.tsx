import { Tab } from 'components/layout/tab/Tab';
import { TabPanel } from 'components/layout/tab/TabPanel';
import { Tabs } from 'components/layout/tab/Tabs';

import { Booking } from 'components/store/reservation/Booking';

import { UseNow } from 'components/store/reservation/UseNowTab';
import { useState } from 'react';
import type { VFC } from 'common/utils/types';
import type React from 'react';

interface ReservationTabProps {
  value: number;
  onChange: (value: number) => void;
}

export const ReservationTab: VFC<ReservationTabProps> = ({
  value,
  onChange,
}) => {
  const handleValueChange = (newValue: number) => {
    onChange(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleValueChange}>
        <Tab label='바로 사용' />
        <Tab label='예약 하기' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <UseNow />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Booking />
      </TabPanel>
    </>
  );
};
