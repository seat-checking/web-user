import { Navigation } from 'components/Navigation';

import { ReservationTab } from 'components/reservation/ReservationTab';
import type { VFC } from 'common/utils/types';

export const ReservationPage: VFC = () => {
  return (
    <>
      <ReservationTab />
      <Navigation />
    </>
  );
};
