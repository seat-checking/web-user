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
} from 'components/reservation/ReservationItem/ReservationItem.styled';

import type { VFC } from 'common/utils/types';

interface ReservationItemProps {
  src: string;
  ReservationName: string;
  seatNumber: number;
  ReservationInfo: string;
  ReservationDate: string;
  ReservationTime: string;
}

export const ReservationItem: VFC<ReservationItemProps> = ({
  src,
  ReservationName,
  seatNumber,
  ReservationInfo,
  ReservationDate,
  ReservationTime,
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
            <Circle />
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
