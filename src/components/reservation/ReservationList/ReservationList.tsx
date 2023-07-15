import { PATH } from 'common/utils/constants';
import { ReservationItem } from 'components/reservation/ReservationItem';
import { Link } from 'react-router-dom';

export const ReservationList = () => {
  const Reservation = {
    src: '',
    reservationName: 'Hspace',
    seatNumber: 152,
    reservationInfo: '1층 레드룸',
    reservationDate: '2월 27일',
    reservationTime: '15:00-18:00',
  };
  return (
    <Link to={`/${PATH.reservationDetail}`}>
      <ReservationItem
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
