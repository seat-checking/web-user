import { getSeatReservations } from 'api/reservation/reservation';
import { Tab } from 'components/common/tab/Tab';
import { TabPanel } from 'components/common/tab/TabPanel';
import { Tabs } from 'components/common/tab/Tabs';

import { SeatBooking } from 'components/store/reservation/seatReservation/SeatBooking';

import { SeatUseNow } from 'components/store/reservation/seatReservation/SeatUseNow';
import { useEffect, useState } from 'react';
import type { ReservationParams } from 'api/reservation/reservation';

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
          'reservation-date-and-time': kstIsoString,
        };
        const response = await getSeatReservations(58, params);
        setReservations(response.result.allReservationsForSeatAndDate);
      } catch (error) {
        return null;
      }
    };
    getReservationTime();
  }, [selectedDate]);
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
