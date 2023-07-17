import { PATH } from 'common/utils/constants';
import { ReservationStatusItem } from 'components/reservationStatus/ReservationStatusItem';

import { Link } from 'react-router-dom';

export const ReservationStatusList = () => {
  const Reservation = {
    src: '',
    reservationName: 'Hspace',
    seatNumber: 152,
    reservationInfo: '1층 레드룸',
    reservationDate: '2월 27일',
    reservationTime: '15:00-18:00',
  };
  return (
    <Link to={`/${PATH.reservationStatusDetail}`}>
      <ReservationStatusItem
        src={Reservation.src}
        ReservationName={Reservation.reservationName}
        seatNumber={Reservation.seatNumber}
        ReservationInfo={Reservation.reservationInfo}
        ReservationDate={Reservation.reservationDate}
        ReservationTime={Reservation.reservationTime}
      />
    </Link>
  );
};
