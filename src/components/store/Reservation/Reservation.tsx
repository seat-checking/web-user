import nextIcon from 'assets/icons/next.svg';
import previcon from 'assets/icons/prev.svg';
import {
  CustomHeaderButton,
  CustomHeaderMonth,
  CustomHeaderWrapper,
  GlobalStyles,
  Wrapper,
} from 'components/store/Reservation/Reservation.styled';
import { format, getYear } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <CustomHeaderWrapper>
    <CustomHeaderButton
      type='button'
      onClick={decreaseMonth}
      disabled={prevMonthButtonDisabled}
      style={{ backgroundImage: `url(${previcon})` }}
    />
    <CustomHeaderMonth>
      {getYear(date)}년 {format(date, 'MMMM', { locale: ko })}
    </CustomHeaderMonth>
    <CustomHeaderButton
      type='button'
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
      style={{ backgroundImage: `url(${nextIcon})` }}
    />
  </CustomHeaderWrapper>
);

export const Reservation = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <Wrapper>
      <GlobalStyles />
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        inline
        locale='ko'
        renderCustomHeader={(props) => (
          <CustomHeader
            date={props.date}
            decreaseMonth={props.decreaseMonth}
            increaseMonth={props.increaseMonth}
            prevMonthButtonDisabled={props.prevMonthButtonDisabled}
            nextMonthButtonDisabled={props.nextMonthButtonDisabled}
          />
        )}
      />
    </Wrapper>
  );
};
