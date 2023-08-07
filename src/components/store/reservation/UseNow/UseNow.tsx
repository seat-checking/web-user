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

  let startHour = currentHour;
  let startMinute = currentMinute;

  // 현재 시간이 30분 단위로 올림되어 다음 타임 슬롯이 시작되도록 처리
  if (currentMinute >= 30) {
    startHour++;
    startMinute = 0;
  } else {
    startMinute = 30;
  }

  // 첫 번째 타임 슬롯은 무조건 현재 시간
  const formattedCurrentHour = ('0' + currentHour).slice(-2);
  const formattedCurrentMinute = ('0' + currentMinute).slice(-2);
  timeSlots.push(`${formattedCurrentHour}:${formattedCurrentMinute}`);

  // 현재 시간 이후의 타임 슬롯 생성
  for (let i = startHour; i < 24; i++) {
    for (let j = i === startHour ? startMinute : 0; j < 60; j += 30) {
      const formattedHour = ('0' + i).slice(-2);
      const formattedMinute = ('0' + j).slice(-2);
      // 24시 타임 슬롯은 00:00으로 추가
      if (i === 23 && j === 30) {
        timeSlots.push('24:00');
      } else {
        timeSlots.push(`${formattedHour}:${formattedMinute}`);
      }
    }
  }

  return timeSlots;
};

export const UseNow = () => {
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
