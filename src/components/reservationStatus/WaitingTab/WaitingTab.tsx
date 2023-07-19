import { PATH } from 'common/utils/constants';
import { ListItem } from 'components/reservationStatus/ListItem';
import { Link } from 'react-router-dom';

export const WaitingTab = () => {
  const reservation = {
    src: '',
    reservationName: 'Hspace',
    seatNumber: 152,
    reservationInfo: '1층 레드룸',
    reservationDate: '2월 27일',
    reservationTime: '15:00-18:00',
  };
  return (
    <ListItem
      src={reservation.src}
      ReservationName={reservation.reservationName}
      seatNumber={reservation.seatNumber}
      ReservationInfo={reservation.reservationInfo}
      ReservationDate={reservation.reservationDate}
      ReservationTime={reservation.reservationTime}
      isActive
    />
  );
};
