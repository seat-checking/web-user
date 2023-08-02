import { Navigation } from 'components/Navigation';
import { ListTab } from 'components/reservationStatus/ListTab';
import type { VFC } from 'common/utils/types';

export const ReservationWaitingPage: VFC = () => {
  return (
    <>
      <ListTab />
      <Navigation />
    </>
  );
};
