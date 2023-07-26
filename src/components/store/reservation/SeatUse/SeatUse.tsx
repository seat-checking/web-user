import { Datepicker } from 'components/store/reservation/Datepicker';
import { ReservationTab } from 'components/store/reservation/ReservationTab';

import { useState } from 'react';
import type React from 'react';

export const SeatUse: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <Datepicker tabValue={value} />
      <ReservationTab value={value} onChange={setValue} />
    </>
  );
};
