import { Navigation } from 'components/Navigation';

import { StatusTab } from 'components/reservationStatus/StatusTab';
import type { VFC } from 'common/utils/types';

export const ReservationStatusPage: VFC = () => {
  return (
    <>
      <StatusTab />
      <Navigation />
    </>
  );
};
