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
  return (
    <StoreItemDiv>
      <StoreItemImgDiv>
        <StoreItemImg src={src} />
      </StoreItemImgDiv>
      <StoreItemDescription>
        <StoreItemName>{storeName}</StoreItemName>
        <StoreItemIntroduction>{introduction}</StoreItemIntroduction>
      </StoreItemDescription>
    </StoreItemDiv>
  );
};
