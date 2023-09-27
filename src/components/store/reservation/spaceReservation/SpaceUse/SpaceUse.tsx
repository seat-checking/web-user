import { Datepicker } from 'components/store/reservation/Datepicker';
import { SpaceReservationTab } from 'components/store/reservation/spaceReservation/SpaceReservationTab';

import { useState } from 'react';

export const SpaceUse = () => {
  const [value, setValue] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <>
      <Datepicker tabValue={value} onDateChange={setSelectedDate} />
      <SpaceReservationTab
        value={value}
        onChange={setValue}
        selectedDate={selectedDate}
      />
    </>
  );
};
