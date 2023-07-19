import { PATH } from 'common/utils/constants';
import { ReservationItem } from 'components/reservation/ReservationItem';
import { Link } from 'react-router-dom';

export const ReservationList = () => {
  const Reservation = {
    src: '',
    ReservationName: 'Hspace',
    seatNumber: 152,
    ReservationInfo: '1층 레드룸',
    ReservationDate: '2월 27일',
    ReservationTime: '15:00-18:00',
  };
  return (
    <Link to={`/${PATH.reservationDetail}`}>
      <ReservationItem
        src={Reservation.src}
        ReservationName={Reservation.ReservationName}
        seatNumber={Reservation.seatNumber}
        ReservationInfo={Reservation.ReservationInfo}
        ReservationDate={Reservation.ReservationDate}
        ReservationTime={Reservation.ReservationTime}
      />
    </Link>
  );
};
