import { Navigation } from 'components/Navigation';
import { ListTab } from 'components/reservationStatus/ListTab';
import type { VFC } from 'common/utils/types';

export const ReservationStatusPage: VFC = () => {
  return (
    <>
      <ListTab />
      <Navigation />
    </>
  );
};
