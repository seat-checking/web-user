import { Button } from 'components/form/atoms/Button';
import { TimeSlot } from 'components/store/reservation/TimeSlot';
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
export const generateAllTimeSlots = () => {
  const timeSlots = [];

  for (let i = 0; i <= 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      if (i === 24 && j > 0) break;
      const formattedHour = ('0' + i).slice(-2);
      const formattedMinutes = ('0' + j).slice(-2);
      timeSlots.push(`${formattedHour}:${formattedMinutes}`);
    }
  }

  return timeSlots;
};

export const generateAllTimeSlotsStartingFromNow = () => {
  const currentDate = new Date();
  const timeSlots = generateAllTimeSlots();

  // 현재 시간의 타임슬롯 인덱스 찾기
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentIndex = timeSlots.indexOf(
    `${('0' + currentHour).slice(-2)}:${currentMinute >= 30 ? '30' : '00'}`,
  );

  // 현재 시간의 타임슬롯부터 반환
  return timeSlots.slice(currentIndex);
};

export const subtract30Minutes = (timeStr: string) => {
  const [hour, minute] = timeStr.split(':').map(Number);
  let newHour = hour;
  let newMinute = minute - 30;

  if (newMinute < 0) {
    newHour -= 1;
    newMinute += 60;
  }

  const formattedHour = ('0' + newHour).slice(-2);
  const formattedMinutes = ('0' + newMinute).slice(-2);

  return `${formattedHour}:${formattedMinutes}`;
};

export const SeatBooking: React.FC<BookingProps> = ({
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
    navigate('/intent', { state: { from: 'SeatBooking' } });
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

  const isTimeSlotDisabled = (time: string) => {
    if (!isSameDay(new Date(), selectedDate)) {
      return false; // 선택한 날짜가 오늘이 아니면 비활성화 로직을 무시합니다.
    }

    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const timeLimit = currentHour + (currentMinute >= 30 ? 4 : 3); // 3시간 후의 타임슬롯을 계산

    const [hour] = time.split(':').map(Number);

    return hour < timeLimit;
  };

  return (
    <div>
      <TimesWrapper>
        {timeSlots.map((time, index) => (
          <TimeSlot
            key={time}
            time={time}
            isSelected={isSelected(time)}
            isActivated={
              !isTimeSlotDisabled(time) &&
              !(index === 0) &&
              !isTimeSlotReserved(time)
            }
            onClick={handleTimeClick}
          />
        ))}
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
