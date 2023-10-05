import {
  SpaceBtn,
  Wrap,
} from 'components/store/SeatInfoTab/components/SpaceList.styled';
import type { SpaceType } from 'api/store/common';

interface SpaceListProps {
  spaceList: SpaceType[] | undefined;
  currentSpaceId: number;
  onClickSpace: (space: SpaceType) => void;
}

/**
 * 스페이스 목록 보여주는 영역
 */
export const SpaceList: React.FC<SpaceListProps> = ({
  spaceList,
  currentSpaceId,
  onClickSpace,
}) => {
  return (
    <Wrap>
      {spaceList?.map((space) => (
        <SpaceBtn
          key={space.storeSpaceId}
          isActive={currentSpaceId === space.storeSpaceId}
          onClick={() => onClickSpace(space)}
        >
          {space.name}
        </SpaceBtn>
      ))}
    </Wrap>
  );
};
