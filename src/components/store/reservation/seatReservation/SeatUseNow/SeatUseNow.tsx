import { Button } from 'components/form/atoms/Button';
import { ErrorMessage } from 'components/store/JoinSpace/JoinSpace.styled';
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservationStore } from 'store/reservationStore';
import type { ReservationProps } from 'components/store/reservation/seatReservation/SeatReservationTab';

interface SeatUseNowProps {
  selectedDate: Date;
  reservations: ReservationProps[];
}

export const generateTimeSlotsFromNow = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const timeSlots = [];

  for (let i = currentHour; i < 24; i++) {
    for (let j = i === currentHour ? currentMinute : 0; j < 60; j += 30) {
      const formattedHour = ('0' + i).slice(-2);
      const formattedMinute = ('0' + j).slice(-2);

      if (i === 23 && j === 30) {
        timeSlots.push('24:00');
      } else {
        timeSlots.push(`${formattedHour}:${formattedMinute}`);
      }
    }
  }

  return timeSlots;
};

export const SeatUseNow: React.FC<SeatUseNowProps> = ({ reservations }) => {
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
    if (selectedTimes.length === 2) {
      const [startTime, endTime] = selectedTimes;
      return time >= startTime && time <= endTime;
    }
    return false;
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
    navigate('/intent', { state: { from: 'SeatUseNow' } });
  };
  const isTimeSlotReserved = () => {
    if (!reservations) return false;

    const currentDate = new Date();

    return reservations.some((reservation) => {
      const startTime = new Date(reservation.startSchedule);
      const endTime = new Date(reservation.endSchedule);

      // 예약된 시간이 현재 시간 이후인 경우에만 반환합니다.
      if (startTime <= currentDate && endTime >= currentDate) {
        return true;
      }

      return false;
    });
  };

  return (
    <div>
      {isTimeSlotReserved() ? (
        <ErrorMessage>현재 사용중인 좌석입니다.</ErrorMessage>
      ) : null}
      <TimesWrapper>
        {timeSlotsInitial.map((time, index) => (
          <TimeSlot
            key={time}
            time={time}
            isSelected={isSelected(time)}
            isActivated={!(index === 0) && !isTimeSlotReserved()}
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
