import { PATH } from 'common/utils/constants';
import { ListItem } from 'components/reservationStatus/ListItem';
import { Link } from 'react-router-dom';

export const RejectedList = () => {
  const reservation = {
    src: '',
    reservationName: 'Hspace',
    seatNumber: 152,
    reservationInfo: '3층 레드룸',
    reservationDate: '2월 27일',
    reservationTime: '15:00-18:00',
  };
  return (
    <Link to={`/${PATH.reservationStatus}/rejected`}>
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
