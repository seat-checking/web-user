import { Navigation } from 'components/Navigation';

import { ReservationStatusTab } from 'components/reservationStatus/ReservationStatusTab';
import type { VFC } from 'common/utils/types';

export const ReservationStatusPage: VFC = () => {
  return (
    <>
      <ReservationStatusTab />
      <Navigation />
    </>
  );
};
