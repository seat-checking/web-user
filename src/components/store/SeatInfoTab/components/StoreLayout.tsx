import { Button } from 'components/form/atoms/Button';
import {
  Boundary as LayoutBoundary,
  BtnsBackground,
  BtnsWrap,
  Chair,
  ChairBorder,
  GridTable,
  GridWrap,
  ReservationButton,
  Wrap as GrayBorderBox,
} from 'components/store/SeatInfoTab/components/StoreLayout.styled';
import { useEffect, useState } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import type {
  GetShopLayoutResponse,
  ReservationUnit,
  SpaceType,
} from 'api/store/common';

type ReservationUnitType = 'CHAIR' | 'SPACE';

interface StoreLayoutProps {
  layout: GetShopLayoutResponse;
  reservationUnit: ReservationUnit;
  currentSpace: SpaceType;
}
/**
 * 좌석 배치 영역
 */
export const StoreLayout: React.FC<StoreLayoutProps> = ({
  layout,
  reservationUnit,
  currentSpace,
}) => {
  const [selectedChair, setSelectedChair] = useState<number | null>(null);
  const [isSpaceSelected, setIsSpaceSelected] = useState(false);

  const initialReservationUnit = reservationUnit.chair ? 'CHAIR' : 'SPACE';

  const [currentReservationUnit, setCurrentReservationUnit] =
    useState<ReservationUnitType>(initialReservationUnit);

  const handleSelectChair = (event: React.MouseEvent, id: number) => {
    setSelectedChair(id);
  };

  const handleSelectSpace = () => {
    if (currentReservationUnit !== 'SPACE') {
      return;
    }
    setIsSpaceSelected(true);
  };

  const handleChangeReservationUnit = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLButtonElement)) {
      return;
    }
    const selectedUnit = event.target.dataset.type;
    if (selectedUnit === 'CHAIR') {
      setCurrentReservationUnit(selectedUnit);
      setIsSpaceSelected(false);
    }
    if (selectedUnit === 'SPACE') {
      setCurrentReservationUnit(selectedUnit);
      setSelectedChair(null);
    }
  };

  const handleUse = () => {
    console.log('use');
  };

  const getButtonText = () => {
    if (currentReservationUnit === 'CHAIR') {
      if (selectedChair == null) {
        return '좌석 사용하기';
      }
      return selectedChair + '번 좌석 사용하기';
    }
    if (!isSpaceSelected) {
      return '스페이스 사용하기';
    }
    return `${currentSpace.name} 사용하기`;
  };

  useEffect(() => {
    // 초기화
    setSelectedChair(null);
    setCurrentReservationUnit(initialReservationUnit);
  }, [setCurrentReservationUnit, reservationUnit, initialReservationUnit]);

  return (
    <>
      <GrayBorderBox>
        <LayoutBoundary
          onClick={handleSelectSpace}
          isClickable={
            currentReservationUnit === 'SPACE' && isSpaceSelected === false
          }
          isSelected={isSpaceSelected}
        >
          <TransformWrapper>
            <TransformComponent>
              <GridWrap>
                {layout.tableList.map((table) => (
                  <GridTable
                    key={table.i}
                    width={table.w}
                    height={table.h}
                    x={table.x}
                    y={table.y}
                  />
                ))}

                {layout.chairList.map((chair) => (
                  <ChairBorder key={chair.i} x={chair.x} y={chair.y}>
                    <Chair
                      onClick={(e) => handleSelectChair(e, chair.i)}
                      isClickable={
                        currentReservationUnit === 'CHAIR' &&
                        selectedChair == null
                      }
                      isSelected={selectedChair === chair.i}
                    >
                      {chair.manageId}
                    </Chair>
                  </ChairBorder>
                ))}
              </GridWrap>
            </TransformComponent>
          </TransformWrapper>
        </LayoutBoundary>
      </GrayBorderBox>
      <BtnsBackground>
        <BtnsWrap onClick={handleChangeReservationUnit}>
          {reservationUnit.chair && (
            <ReservationButton
              data-type='CHAIR'
              type='button'
              isActive={currentReservationUnit === 'CHAIR'}
            >
              좌석 사용
            </ReservationButton>
          )}
          {reservationUnit.space && (
            <ReservationButton
              data-type='SPACE'
              type='button'
              isActive={currentReservationUnit === 'SPACE'}
            >
              스페이스 사용
            </ReservationButton>
          )}
        </BtnsWrap>
      </BtnsBackground>
      <Button
        onClick={handleUse}
        disabled={selectedChair == null && isSpaceSelected === false}
      >
        {getButtonText()}
      </Button>
    </>
  );
};
