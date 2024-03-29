import { getSeatReservations } from 'api/reservation/reservation';
import { Tab } from 'components/common/tab/Tab';
import { TabPanel } from 'components/common/tab/TabPanel';
import { Tabs } from 'components/common/tab/Tabs';

import { SeatBooking } from 'components/store/reservation/seatReservation/SeatBooking';

import { SeatUseNow } from 'components/store/reservation/seatReservation/SeatUseNow';
import { useEffect, useState } from 'react';
import { useReservationStore } from 'store/reservationStore';
import type { ReservationParams } from 'api/reservation/common';

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

export const SeatReservationTab: VFC<ReservationTabProps> = ({
  value,
  onChange,
  selectedDate,
}) => {
  const storeChairId = useReservationStore((state) => state.storeChairId);
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

        const params: ReservationParams = {
          standardSchedule: kstIsoString,
        };
        const response = await getSeatReservations(storeChairId, params);
        setReservations(response.result.allUtilizationsForSeatAndDate);
      } catch (error) {
        return null;
      }
    };
    getReservationTime();
  }, [selectedDate, storeChairId]);
  return (
    <>
      <Tabs value={value} onChange={handleValueChange}>
        <Tab label='바로 사용' />
        <Tab label='예약 하기' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SeatUseNow selectedDate={selectedDate} reservations={reservations} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SeatBooking selectedDate={selectedDate} reservations={reservations} />
      </TabPanel>
    </>
  );
};
