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

  const truncatedIntroduction =
    introduction.length > 48 ? introduction.slice(0, 48) + '...' : introduction;

  const truncatedStoreName =
    storeName.length > 16 ? storeName.slice(0, 16) + '...' : storeName;
  return (
    <StoreItemDiv>
      <StoreItemImgDiv>{renderImage()}</StoreItemImgDiv>
      <StoreItemDescription>
        <StoreItemName>
          {truncatedStoreName}
          {open ? <Start>영업중</Start> : <Ready>영업준비중</Ready>}
        </StoreItemName>
        <StoreItemIntroduction>{truncatedIntroduction}</StoreItemIntroduction>
      </StoreItemDescription>
    </StoreItemDiv>
  );
};
