import mainImg from 'assets/icons/storeImg.svg';
import {
  Ready,
  Start,
  StoreItemDefaultImg,
  StoreItemDescription,
  StoreItemDiv,
  StoreItemImg,
  StoreItemImgDiv,
  StoreItemIntroduction,
  StoreItemName,
} from 'components/store/StoreItem/StoreItem.styled';
import type { VFC } from 'common/utils/types';

interface StoreItemProps {
  src: string;
  storeName: string;
  introduction: string;
  open: boolean;
}

export const StoreItem: VFC<StoreItemProps> = ({
  src,
  storeName,
  introduction,
  open,
}) => {
  const renderImage = () => {
    if (!src || src.includes('image-error')) {
      return <StoreItemDefaultImg src={mainImg} />;
    }
    return <StoreItemImg src={src} />;
  };

  return (
    <StoreItemDiv>
      <StoreItemImgDiv>{renderImage()}</StoreItemImgDiv>
      <StoreItemDescription>
        <StoreItemName>
          {storeName}
          {open ? <Start>영업중</Start> : <Ready>영업준비중</Ready>}
        </StoreItemName>
        <StoreItemIntroduction>{introduction}</StoreItemIntroduction>
      </StoreItemDescription>
    </StoreItemDiv>
  );
};
