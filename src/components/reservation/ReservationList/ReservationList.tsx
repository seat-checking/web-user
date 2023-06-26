import { ReservationItem } from 'components/reservation/ReservationItem';

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
    <ReservationItem
      src={Reservation.src}
      ReservationName={Reservation.ReservationName}
      seatNumber={Reservation.seatNumber}
      ReservationInfo={Reservation.ReservationInfo}
      ReservationDate={Reservation.ReservationDate}
      ReservationTime={Reservation.ReservationTime}
    />
  );
};
