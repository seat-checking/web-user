import {
  useGetSeatStatistics,
  useGetSpaceLayout,
  useGetSpaceList,
} from 'api/store/useStore';
import { Spinner } from 'components/common/Spinner';
import {
  AverageText,
  Label,
  SeatCount,
  SeatCountWrap,
  UpperWrap,
} from 'components/store/SeatInfoTab/SeatInfoTab.styled';
import { SpaceList } from 'components/store/SeatInfoTab/components/SpaceList';
import { StoreLayout } from 'components/store/SeatInfoTab/components/StoreLayout';

import { useEffect, useState } from 'react';
import type { SpaceType, StoreDetaillResponse } from 'api/store/common';

import type { VFC } from 'common/utils/types';

interface SeatInfoTabProps {
  storeInfo: StoreDetaillResponse;
  storeId: number;
}

/**
 * 좌석정보 탭을 클릭했을 때 하단에 보여줄 컴포넌트
 */
export const SeatInfoTab: VFC<SeatInfoTabProps> = ({ storeId }) => {
  const { data: spaceList, isLoading } = useGetSpaceList(storeId);
  const [currentSpace, setCurrentSpace] = useState<SpaceType | null>(null);

  const { data: seatStatistics } = useGetSeatStatistics(storeId);

  const { data: layout, isLoading: isLayoutLoading } = useGetSpaceLayout(
    currentSpace?.storeSpaceId,
  );

  const handleChangeSpace = (space: SpaceType) => {
    setCurrentSpace(space);
  };

  useEffect(() => {
    if (!spaceList || spaceList.length === 0) {
      return;
    }
    setCurrentSpace(spaceList[0]);
  }, [spaceList]);

  return (
    <div>
      <UpperWrap>
        <Label>좌석 정보</Label>
        <SeatCountWrap>
          <SeatCount>총 좌석: {seatStatistics?.totalNumberOfSeats}개</SeatCount>
          <SeatCount>
            잔여 좌석: {seatStatistics?.numberOfRemainingSeats}개
          </SeatCount>
        </SeatCountWrap>
        <AverageText>
          좌석 평균 이용시간: {seatStatistics?.averageSeatUsageMinute}분
        </AverageText>
      </UpperWrap>
      {isLoading ? (
        <Spinner />
      ) : spaceList?.length === 0 || currentSpace == null ? (
        '좌석이 설정되지 않았습니다.'
      ) : (
        <>
          <SpaceList
            spaceList={spaceList}
            currentSpaceId={currentSpace.storeSpaceId}
            onClickSpace={handleChangeSpace}
          />
          {isLayoutLoading || layout === undefined || currentSpace == null ? (
            <Spinner />
          ) : (
            <StoreLayout
              reservationUnit={layout.reservationUnit}
              layout={layout}
              currentSpace={currentSpace}
            />
          )}
        </>
      )}
    </div>
  );
};
