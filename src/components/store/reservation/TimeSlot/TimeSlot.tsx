import {
  Box,
  Line,
  Slot,
  SubBox,
  TimeLabel,
} from 'components/store/reservation/TimeSlot/TimeSlot.styled';
import type { VFC } from 'common/utils/types';

interface TimeSlotProps {
  time: string;
  isSelected: boolean;
  onClick: (time: string) => void;
}

export const TimeSlot: VFC<TimeSlotProps> = ({ time, isSelected, onClick }) => {
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
        onClick={() => onClick(time)}
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
