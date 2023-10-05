import {
  Box,
  Line,
  Slot,
  SubBox,
  TimeLabel,
} from 'components/store/reservation/TimeSlot/TimeSlot.styled';
import type { FC } from 'react';
import type React from 'react';

interface TimeSlotProps {
  time: string;
  isSelected: boolean;
  isActivated: boolean;
  onClick: (time: string) => void;
}

export const TimeSlot: FC<TimeSlotProps> = ({
  time,
  isSelected,
  isActivated,
  onClick,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(time);
    }
  };

  return (
    <Slot>
      <Line />
      <Box
        isSelected={isSelected}
        isActivated={isActivated}
        onClick={() => (isActivated ? onClick(time) : null)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role='button'
      >
        <TimeLabel>{time}</TimeLabel>
      </Box>
      <SubBox />
    </Slot>
  );
};
