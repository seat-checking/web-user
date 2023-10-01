import { useGetSpaceLayout, useGetSpaceList } from 'api/store/useStore';
import { Button } from 'components/form/atoms/Button';
import { LoadingSpinner } from 'components/layout/Spinner/Spinner.styled';
import {
  AverageText,
  BtnsBackground,
  BtnsWrap,
  Label,
  ReservationButton,
  SeatCount,
  SeatCountWrap,
  UpperWrap,
} from 'components/store/SeatInfoTab/SeatInfoTab.styled';
import { SpaceList } from 'components/store/SeatInfoTab/components/SpaceList';
import { StoreLayout } from 'components/store/SeatInfoTab/components/StoreLayout';

import { useEffect, useState } from 'react';
import type { StoreDetaillResponse } from 'api/store/common';

import type { VFC } from 'common/utils/types';

type ReservationUnitType = 'CHAIR' | 'SPACE';

interface SeatInfoTabProps {
  storeInfo: StoreDetaillResponse;
  storeId: number;
}

/**
 * 좌석정보 탭을 클릭했을 때 하단에 보여줄 컴포넌트
 */
export const SeatInfoTab: VFC<SeatInfoTabProps> = ({ storeId }) => {
  const { data: spaceList, isLoading } = useGetSpaceList(storeId);

  const [currentSpaceId, setCurrentSpaceId] = useState<number | null>(null);

  const { data: layout, isLoading: isLayoutLoading } =
    useGetSpaceLayout(currentSpaceId);

  const [reservationUnit, setReservationUnit] =
    useState<ReservationUnitType>('CHAIR');

  const [selectedChair, setSelectedChair] = useState<string | null>(null);

  const handleChangeReservationUnit = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLButtonElement)) {
      return;
    }
    const selectedUnit = event.target.dataset.type;
    if (selectedUnit === 'CHAIR' || selectedUnit === 'SPACE') {
      setReservationUnit(selectedUnit);
    }
  };

  const handleChangeSpace = (spaceId: number) => {
    setCurrentSpaceId(spaceId);
  };

  useEffect(() => {
    if (!spaceList || spaceList.length === 0) {
      return;
    }
    setCurrentSpaceId(spaceList[0].storeSpaceId);
  }, [spaceList]);

  useEffect(() => {
    if (!layout) {
      return;
    }
    const initialReservationUnit = layout.reservationUnit.chair
      ? 'CHAIR'
      : 'SPACE';
    setReservationUnit(initialReservationUnit);
  }, [layout]);

  return (
    <div>
      <UpperWrap>
        <Label>좌석 정보</Label>
        <SeatCountWrap>
          <SeatCount>총 좌석: 111개</SeatCount>
          <SeatCount>잔여 좌석: 111개</SeatCount>
        </SeatCountWrap>
        <AverageText>좌석 평균 이용시간:54분</AverageText>
      </UpperWrap>
      {isLoading ? (
        <LoadingSpinner />
      ) : spaceList?.length === 0 ? (
        '좌석이 설정되지 않았습니다.'
      ) : (
        <>
          <SpaceList
            spaceList={spaceList}
            currentSpaceId={currentSpaceId}
            onClickSpace={handleChangeSpace}
          />
          {isLayoutLoading ? (
            <LoadingSpinner />
          ) : (
            <StoreLayout
              layout={layout}
              // isClickActive={isSeatClick}
              // isSpaceClick={isSpaceClick}
              setSelectedChair={setSelectedChair}
              selectedChair={selectedChair}
            />
          )}
          <BtnsBackground>
            <BtnsWrap onClick={handleChangeReservationUnit}>
              {layout?.reservationUnit.chair && (
                <ReservationButton
                  data-type='CHAIR'
                  type='button'
                  isActive={reservationUnit === 'CHAIR'}
                >
                  좌석 사용
                </ReservationButton>
              )}
              {layout?.reservationUnit.space && (
                <ReservationButton
                  data-type='SPACE'
                  type='button'
                  isActive={reservationUnit === 'SPACE'}
                >
                  스페이스 사용 {selectedChair ? selectedChair + '번' : ''}
                </ReservationButton>
              )}
            </BtnsWrap>
          </BtnsBackground>
          <Button>좌석 사용하기</Button>
        </>
      )}
    </div>
  );
};
