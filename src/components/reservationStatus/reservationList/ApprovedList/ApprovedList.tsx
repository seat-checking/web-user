import { PATH } from 'common/utils/constants';
import { Button } from 'components/form/atoms/Button';
import { ButtonWrapper } from 'components/reservationStatus/DetailItem/DetailItem.styled';
import { ListItem } from 'components/reservationStatus/ListItem';
import { Link } from 'react-router-dom';

export const ApprovedList = () => {
  const reservation = {
    src: '',
    reservationName: 'Hspace',
    seatNumber: 152,
    reservationInfo: '1층 레드룸',
    reservationDate: '2월 27일',
    reservationTime: '15:00-18:00',
  };
  return (
    <Link to={`/${PATH.reservationStatus}/approved`}>
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
