import { Button } from 'components/form/atoms/Button';
import { TimeSlot } from 'components/store/reservation/TimeSlot';
import { generateTimeSlotsFromNow } from 'components/store/reservation/seatReservation/SeatUseNow';
import {
  AvailableColor,
  ButtonWrapper,
  ColorText,
  HelperText,
  NotAvailable,
  TimesWrapper,
  UseColorWrapper,
} from 'components/store/reservation/seatReservation/SeatUseNow/SeatUseNowstyled';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservationStore } from 'store/reservationStore';
import type { ReservationProps } from 'components/store/reservation/seatReservation/SeatReservationTab';
import type React from 'react';

interface SpaceUseNowProps {
  selectedDate: Date;
  reservations: ReservationProps[];
}

export const SpaceUseNow: React.FC<SpaceUseNowProps> = ({
  selectedDate,
  reservations,
}) => {
  const timeSlotsInitial = generateTimeSlotsFromNow();
  const defaultSelectedTime = timeSlotsInitial[0];
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const setSchedule = useReservationStore((state) => state.setSchedule);
  const navigate = useNavigate();

  const handleTimeClick = (time: string) => {
    if (time !== defaultSelectedTime) {
      setSelectedTimes([defaultSelectedTime, time]);
    }
  };

  const isSelected = (time: string) => {
    const [startTime, endTime] = selectedTimes;
    return time >= startTime && time <= endTime;
  };

  const isTimeSelected = selectedTimes.length >= 2;

  const handleNextPageClick = () => {
    const currentDate = new Date();
    const [startTimeStr, endTimeStr] = selectedTimes;

    const getKSTFormattedTime = (timeStr: string) => {
      const [hour, minute] = timeStr.split(':').map(Number);
      const date = new Date(currentDate);
      date.setHours(hour, minute, 0, 0);

      const yyyy = date.getFullYear();
      const MM = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      const HH = String(date.getHours()).padStart(2, '0');
      const mm = String(date.getMinutes()).padStart(2, '0');
      const ss = String(date.getSeconds()).padStart(2, '0');

      return `${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`;
    };

    const startISOTime = getKSTFormattedTime(startTimeStr);
    const endISOTime = getKSTFormattedTime(endTimeStr);

    setSchedule(startISOTime, endISOTime);
    navigate('/intent', { state: { from: 'SpaceUseNow' } });
  };

  const isTimeSlotReserved = (time: string) => {
    return reservations.some((reservation) => {
      const reservedStart = new Date(reservation.startSchedule).getTime();
      const reservedEnd = new Date(reservation.endSchedule).getTime();

      const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
      const actualTime = new Date(`${formattedSelectedDate}T${time}:00`);
      actualTime.setMinutes(actualTime.getMinutes() - 30);

      const checkTime = actualTime.getTime();

      return checkTime >= reservedStart && checkTime <= reservedEnd;
    });
  };

  return (
    <div>
      <TimesWrapper>
        {timeSlotsInitial.map((time, index) => (
          <TimeSlot
            key={time}
            time={time}
            isSelected={isSelected(time)}
            isActivated={!(index === 0) && !isTimeSlotReserved(time)}
            onClick={() => handleTimeClick(time)}
          />
        ))}
      </TimesWrapper>
      <HelperText>최소 30분 ~ 최대 xx시간</HelperText>
      <UseColorWrapper>
        <ColorText>
          <AvailableColor />
          이용가능
        </ColorText>
        <ColorText>
          <NotAvailable />
          이용불가
        </ColorText>
      </UseColorWrapper>
      <ButtonWrapper>
        {isTimeSelected ? (
          <Button
            backgroundColor='#FF8D4E'
            color='#FFFFFF'
            onClick={handleNextPageClick}
          >
            다음
          </Button>
        ) : (
          <Button disabled>다음</Button>
        )}
      </ButtonWrapper>
    </div>
  );
};
