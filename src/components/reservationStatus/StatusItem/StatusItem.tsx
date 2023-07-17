import {
  Circle,
  ReservationItemDate,
  ReservationItemDateWrapper,
  ReservationItemImg,
  ReservationItemImgWrapper,
  ReservationItemName,
  ReservationItemNameWrapper,
  ReservationItemSeatInfo,
  ReservationItemTime,
  ReservationItemWrapper,
  ReservationIteminfo,
} from 'components/reservationStatus/StatusItem/StatusItem.styled';

import type { VFC } from 'common/utils/types';

interface ReservationItemProps {
  src: string;
  ReservationName: string;
  seatNumber: number;
  ReservationInfo: string;
  ReservationDate: string;
  ReservationTime: string;
  isActive: boolean;
}

export const StatusItem: VFC<ReservationItemProps> = ({
  src,
  ReservationName,
  seatNumber,
  ReservationInfo,
  ReservationDate,
  ReservationTime,
  isActive,
}) => {
  const renderImage = () => {
    if (!src || src.includes('image-error')) {
      return <ReservationItemImg style={{ backgroundColor: '#aabdff' }} />;
    }
    return <ReservationItemImg src={src} />;
  };
  return (
    <ReservationItemWrapper>
      <ReservationItemImgWrapper>{renderImage()}</ReservationItemImgWrapper>
      <ReservationItemNameWrapper>
        <ReservationItemName>
          {ReservationName}
          <ReservationItemSeatInfo>
            <Circle isActive={isActive} />
            {seatNumber}번 좌석
          </ReservationItemSeatInfo>
        </ReservationItemName>
        <ReservationIteminfo>{ReservationInfo}</ReservationIteminfo>
      </ReservationItemNameWrapper>
      <ReservationItemDateWrapper>
        <ReservationItemDate>{ReservationDate}</ReservationItemDate>
        <ReservationItemTime>{ReservationTime}</ReservationItemTime>
      </ReservationItemDateWrapper>
    </ReservationItemWrapper>
  );
};
