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
} from 'components/store/reservation/UseNow/UseNow.styled';
import { useEffect, useState } from 'react';

const generateAllTimeSlots = () => {
  const timeSlots = [];

  for (let i = 0; i < 24; i++) {
    const formattedHour = ('0' + i).slice(-2);
    timeSlots.push(`${formattedHour}:00`);
  }

  return timeSlots;
};

export const Booking: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>(generateAllTimeSlots());

  useEffect(() => {
    setTimeSlots(generateAllTimeSlots());
  }, []);
  const handleTimeClick = (time: string) => {
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
  };

  const isSelected = (time: string) => {
    if (selectedTime.length === 2) {
      const [start, end] = selectedTime;
      return time >= start && time <= end;
    }
    return selectedTime.includes(time);
  };

  return (
    <div>
      <TimesWrapper>
        {timeSlots.map((time) => (
          <TimeSlot
            key={time}
            time={time}
            isSelected={isSelected(time)}
            isActivated
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
        <Button>사용 신청</Button>
      </ButtonWrapper>
    </div>
  );
};
