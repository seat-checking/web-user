import nextIcon from 'assets/icons/next.svg';
import previcon from 'assets/icons/prev.svg';
import {
  CustomHeaderButton,
  CustomHeaderMonth,
  CustomHeaderWrapper,
  GlobalStyles,
  Wrapper,
} from 'components/store/reservation/Datepicker/Datepicker.styled';

import {
  CalendarDate,
  CalendarInfo,
} from 'components/store/reservation/UseNow/UseNow.styled';
import { format, getYear } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import type { VFC } from 'common/utils/types';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

interface DatepickerProps {
  tabValue: number;
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

export const Datepicker: VFC<DatepickerProps> = ({ tabValue }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [formattedDate, setFormattedDate] = useState<string>(
    format(startDate, 'MMMM d일, eeee', { locale: ko }),
  );

  const handleDateChange = (date: Date) => {
    setStartDate(date);

    const newFormattedDate = format(date, 'MMMM d일, eeee', { locale: ko });
    setFormattedDate(newFormattedDate);
    console.log('클릭한 날짜:', newFormattedDate);
  };

  useEffect(() => {
    const currentDate = new Date();
    setStartDate(currentDate);
    const newFormattedDate = format(currentDate, 'MMMM d일, eeee', {
      locale: ko,
    });
    setFormattedDate(newFormattedDate);
  }, [tabValue]);

  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <ReactDatePicker
          selected={startDate}
          onChange={handleDateChange}
          inline
          locale='ko'
          disabledKeyboardNavigation
          minDate={tabValue === 0 ? new Date() : undefined}
          maxDate={tabValue === 0 ? new Date() : undefined}
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
      <CalendarInfo>
        <CalendarDate>{formattedDate}</CalendarDate>
      </CalendarInfo>
    </>
  );
};
