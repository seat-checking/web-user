import { Datepicker } from 'components/store/reservation/Datepicker';
import { SeatReservationTab } from 'components/store/reservation/seatReservation/SeatReservationTab';

import { useState } from 'react';
import type React from 'react';

export const SeatUse: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <>
      <Datepicker tabValue={value} onDateChange={setSelectedDate} />
      <SeatReservationTab
        value={value}
        onChange={setValue}
        selectedDate={selectedDate}
      />
    </>
  );
};
