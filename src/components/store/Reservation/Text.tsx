import { useState } from 'react';
import DatePicker from 'react-datepicker';
import type React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

type TimeSlotProps = {
  time: string;
  isSelected: boolean;
  onClick: (time: string) => void;
};

const TimeSlot: React.FC<TimeSlotProps> = ({ time, isSelected, onClick }) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick(time);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '50%',
          width: '1px',
          height: '10px',
          backgroundColor: '#EAEBEC',
          marginLeft: '23px',
          marginTop: '1px',
        }}
      />
      <div
        style={{
          width: '4.6rem',
          height: '3rem',
          margin: '0.5px',
          padding: '1px',
          backgroundColor: isSelected ? '#FF8D4E' : '#FFDDCA',
          position: 'relative',
        }}
        tabIndex={0}
        role='button'
        onClick={() => onClick(time)}
        onKeyPress={handleKeyPress}
      >
        <div
          style={{
            position: 'absolute',
            top: '-2.5rem',
            right: '-1.5rem',
            zIndex: 1,
          }}
        >
          {time}
        </div>
      </div>
    </div>
  );
};

const TestReservation: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const timeSlots = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ];

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
      <DatePicker
        selected={new Date()}
        onChange={(date: Date) => {}}
        dateFormat='yyyy/MM/dd'
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: '30px',
        }}
      >
        {timeSlots.map((time) => (
          <TimeSlot
            key={time}
            time={time}
            isSelected={isSelected(time)}
            onClick={handleTimeClick}
          />
        ))}
      </div>
      <button type='button' onClick={() => console.log(selectedTime)}>
        예약하기
      </button>
    </div>
  );
};

export default TestReservation;
