import { PATH } from 'common/utils/constants';
import { Button } from 'components/form/atoms/Button';
import { TimeSlot } from 'components/store/reservation/TimeSlot';
import {
  generateAllTimeSlots,
  generateAllTimeSlotsStartingFromNow,
  subtract30Minutes,
} from 'components/store/reservation/seatReservation/SeatBooking';
import { HelperMessage } from 'components/store/reservation/seatReservation/SeatBooking/SeatBookingstyled';
import {
  AvailableColor,
  ButtonWrapper,
  ColorText,
  HelperText,
  NotAvailable,
  TimesWrapper,
  UseColorWrapper,
} from 'components/store/reservation/seatReservation/SeatUseNow/SeatUseNowstyled';
import { isSameDay } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservationStore } from 'store/reservationStore';
import { useTheme } from 'styled-components';
import type { ReservationProps } from 'components/store/reservation/seatReservation/SeatReservationTab';

interface BookingProps {
  selectedDate: Date;
  reservations: ReservationProps[];
}

export const SpaceBooking: React.FC<BookingProps> = ({
  selectedDate,
  reservations,
}) => {
  const [selectedDisplayTime, setSelectedDisplayTime] = useState<string[]>([]);

  const [selectedInternalTime, setSelectedInternalTime] = useState<string[]>(
    [],
  );
  const [timeSlots, setTimeSlots] = useState<string[]>(generateAllTimeSlots());
  const navigate = useNavigate();
  const setSchedule = useReservationStore((state) => state.setSchedule);
  const theme = useTheme();

  useEffect(() => {
    if (isSameDay(new Date(), selectedDate)) {
      setTimeSlots(generateAllTimeSlotsStartingFromNow());
    } else {
      setTimeSlots(generateAllTimeSlots());
    }
  }, [selectedDate]);

  const handleTimeClick = (time: string) => {
    let newDisplayTimes = [...selectedDisplayTime];
    let newInternalTimes = [...selectedInternalTime];

    if (newDisplayTimes.length === 2) {
      newDisplayTimes = [];
      newInternalTimes = [];
    }

    if (newDisplayTimes.includes(time)) {
      newDisplayTimes = newDisplayTimes.filter((t) => t !== time);
      newInternalTimes = newInternalTimes.filter(
        (t) => t !== (t === time ? subtract30Minutes(time) : time),
      );
    }

    newDisplayTimes.push(time);
    if (newDisplayTimes.length === 1) {
      newInternalTimes.push(subtract30Minutes(time));
    } else {
      newInternalTimes.push(time);
    }

    newDisplayTimes.sort();
    newInternalTimes.sort();

    setSelectedDisplayTime(newDisplayTimes);
    setSelectedInternalTime(newInternalTimes);
  };

  const isSelected = (time: string) => {
    if (selectedDisplayTime.length === 2) {
      const [start, end] = selectedDisplayTime;
      return time >= start && time <= end;
    }
    return selectedDisplayTime.includes(time);
  };

  const handleNextPage = () => {
    const [startTimeStr, endTimeStr] = selectedInternalTime;

    const getKSTFormattedTime = (timeStr: string) => {
      const [hour, minute] = timeStr.split(':').map(Number);
      const date = new Date(selectedDate);
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
    navigate(`/${PATH.intent}`, {
      state: { from: 'SpaceBooking' },
      replace: true,
    });
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
        {timeSlots.length === 0 ? (
          <HelperMessage>해당 날짜는 예약이 불가능합니다😢</HelperMessage>
        ) : (
          timeSlots.map((time, index) => (
            <TimeSlot
              key={time}
              time={time}
              isSelected={isSelected(time)}
              isActivated={!(index === 0) && !isTimeSlotReserved(time)}
              onClick={handleTimeClick}
            />
          ))
        )}
      </TimesWrapper>
      <HelperText>최소 1시간 ~ 최대 xx시간</HelperText>
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
        {selectedDisplayTime.length === 2 ? (
          <Button
            backgroundColor={theme.palette.primary.orange}
            color={theme.palette.white.main}
            onClick={handleNextPage}
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
