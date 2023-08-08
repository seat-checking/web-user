import { PATH } from 'common/utils/constants';
import { ListItem } from 'components/reservationStatus/ListItem';
import React from 'react';
import { Link } from 'react-router-dom';

export const CancelledList = () => {
  const reservation = {
    src: '',
    reservationName: 'Hspace',
    seatNumber: 152,
    reservationInfo: '2층 레드룸',
    reservationDate: '2월 27일',
    reservationTime: '15:00-18:00',
  };
  return (
    <Link to={`/${PATH.reservationStatus}/cancelled`}>
      <ListItem
        src={reservation.src}
        ReservationName={reservation.reservationName}
        seatNumber={reservation.seatNumber}
        ReservationInfo={reservation.reservationInfo}
        ReservationDate={reservation.reservationDate}
        ReservationTime={reservation.reservationTime}
        isActive={false}
      />
    </Link>
  );
};
