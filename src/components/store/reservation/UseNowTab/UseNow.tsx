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
} from 'components/store/reservation/UseNowTab/UseNow.styled';
import { useEffect, useState } from 'react';

const generateTimeSlotsFromNow = () => {
  const currentHour = new Date().getHours();
  const timeSlots = [];

  for (let i = currentHour; i <= 24; i++) {
    const formattedHour = ('0' + i).slice(-2);
    timeSlots.push(`${formattedHour}:00`);
  }

  return timeSlots;
};

export const UseNow: React.FC = () => {
  const timeSlotsInitial = generateTimeSlotsFromNow();
  const defaultSelectedTime = [timeSlotsInitial[0]];
  const [selectedTime, setSelectedTime] =
    useState<string[]>(defaultSelectedTime);
  const [timeSlots, setTimeSlots] = useState<string[]>(timeSlotsInitial);

  const handleTimeClick = (time: string) => {
    // If the clicked time is before the default start time, set a new selection
    const defaultStartTime = defaultSelectedTime[0];
    if (time < defaultStartTime) {
      setSelectedTime([time, defaultStartTime]);
    } else {
      let newTimes = [...selectedTime];
      if (newTimes.includes(time)) {
        newTimes = newTimes.filter((t) => t !== time);
      } else if (newTimes.length === 2) {
        newTimes.shift();
        newTimes.push(time);
      } else {
        newTimes.push(time);
      }

      newTimes.sort();
      setSelectedTime(newTimes);
    }
  };

  const isSelected = (time: string) => {
    if (selectedTime.length === 2) {
      const [start, end] = selectedTime;
      return time >= start && time <= end;
    }
    return selectedTime.includes(time);
  };

  const handle = () => {
    console.log(selectedTime);
  };

  return (
    <div>
      <TimesWrapper>
        {timeSlots.map((time) => (
          <TimeSlot
            key={time}
            time={time}
            isSelected={isSelected(time)}
            onClick={() => handleTimeClick(time)}
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
        <Button>사용 신청</Button>
      </ButtonWrapper>
    </div>
  );
};
