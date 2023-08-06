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
import { useState } from 'react';

const generateTimeSlotsFromNow = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const timeSlots = [];

  for (let i = currentHour; i < 24; i++) {
    for (let j = i === currentHour ? currentMinute : 0; j < 60; j += 30) {
      if (i === currentHour && j < currentMinute) {
        // eslint-disable-next-line no-continue
        continue;
      }
      const formattedHour = ('0' + i).slice(-2);
      const formattedMinute = ('0' + j).slice(-2);
      timeSlots.push(`${formattedHour}:${formattedMinute}`);
    }
  }

  return timeSlots;
};

export const UseNow: React.FC = () => {
  const timeSlotsInitial = generateTimeSlotsFromNow();
  const defaultSelectedTime = timeSlotsInitial[0];
  const [selectedTimes, setSelectedTimes] = useState<string[]>([
    defaultSelectedTime,
    defaultSelectedTime,
  ]);

  const handleTimeClick = (time: string) => {
    if (time !== defaultSelectedTime) {
      setSelectedTimes([defaultSelectedTime, time]);
    }
  };

  const isSelected = (time: string) => {
    const [startTime, endTime] = selectedTimes;
    return time >= startTime && time <= endTime;
  };

  console.log(selectedTimes);
  return (
    <div>
      <TimesWrapper>
        {timeSlotsInitial.map((time, index) => (
          <TimeSlot
            key={time}
            time={time}
            isSelected={isSelected(time)}
            isActivated={!(index === 0)}
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
        <Button>사용 신청</Button>
      </ButtonWrapper>
    </div>
  );
};
