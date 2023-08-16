import {
  ReservationIteminfo,
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
} from 'components/reservationStatus/ListItem/ListItem.styled';

import type { VFC } from 'common/utils/types';

interface ReservationItemProps {
  src: string;
  ReservationName: string;
  seatNumber: string;
  ReservationInfo: string;
  ReservationDate: string;
  ReservationTime: string;
  isActive: boolean;
}

export const ListItem: VFC<ReservationItemProps> = ({
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
      <div>
        <ReservationItemNameWrapper>
          <ReservationItemName>
            {ReservationName}
            <ReservationIteminfo>{ReservationInfo}</ReservationIteminfo>
          </ReservationItemName>
        </ReservationItemNameWrapper>
        <ReservationItemSeatInfo>
          <Circle isActive={isActive} />
          {seatNumber}
        </ReservationItemSeatInfo>
      </div>
      <ReservationItemDateWrapper>
        <ReservationItemDate>{ReservationDate}</ReservationItemDate>
        <ReservationItemTime>{ReservationTime}</ReservationItemTime>
      </ReservationItemDateWrapper>
    </ReservationItemWrapper>
  );
};
