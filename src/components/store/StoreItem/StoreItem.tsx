import {
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
}

export const StoreItem: VFC<StoreItemProps> = ({
  src,
  storeName,
  introduction,
}) => {
  const renderImage = () => {
    if (!src || src.includes('image-error')) {
      return <StoreItemImg style={{ backgroundColor: '#AABDFF' }} />;
    }
    return <StoreItemImg src={src} />;
  };

  return (
    <StoreItemDiv>
      <StoreItemImgDiv>{renderImage()}</StoreItemImgDiv>
      <StoreItemDescription>
        <StoreItemName>{storeName}</StoreItemName>
        <StoreItemIntroduction>{introduction}</StoreItemIntroduction>
      </StoreItemDescription>
    </StoreItemDiv>
  );
};
