import { getSpaceReservations } from 'api/reservation/reservation';
import { Tab } from 'components/common/tab/Tab';
import { TabPanel } from 'components/common/tab/TabPanel';
import { Tabs } from 'components/common/tab/Tabs';

import { SpaceBooking } from 'components/store/reservation/spaceReservation/Booking';
import { SpaceUseNow } from 'components/store/reservation/spaceReservation/SpaceUseNow';
import { useEffect, useState } from 'react';
import { useReservationStore } from 'store/reservationStore';
import type { SpaceReservationParams } from 'api/reservation/common';
import type { VFC } from 'common/utils/types';

interface ReservationTabProps {
  value: number;
  onChange: (value: number) => void;
  selectedDate: Date;
}
export interface ReservationProps {
  startSchedule: string;
  endSchedule: string;
}
export const SpaceReservationTab: VFC<ReservationTabProps> = ({
  value,
  onChange,
  selectedDate,
}) => {
  const storeSpaceId = useReservationStore((state) => state.storeSpaceId);
  const [reservations, setReservations] = useState<ReservationProps[]>([]);
  const handleValueChange = (newValue: number) => {
    onChange(newValue);
  };

  useEffect(() => {
    const getReservationTime = async () => {
      try {
        const kstDate = new Date(selectedDate);
        kstDate.setHours(kstDate.getHours() + 9);

        let kstIsoString = kstDate.toISOString();

        kstIsoString = kstIsoString.replace(/\.\d+Z$/, '');

        const params: SpaceReservationParams = {
          schedule: kstIsoString,
        };
        const response = await getSpaceReservations(storeSpaceId, params);
        setReservations(response.result.allUtilizationsForSeatAndDate);
      } catch (error) {
        return null;
      }
    };
    getReservationTime();
  }, [selectedDate, storeSpaceId]);
  return (
    <>
      <Tabs value={value} onChange={handleValueChange}>
        <Tab label='바로 사용' />
        <Tab label='예약 하기' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SpaceUseNow selectedDate={selectedDate} reservations={reservations} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SpaceBooking selectedDate={selectedDate} reservations={reservations} />
      </TabPanel>
    </>
  );
};
