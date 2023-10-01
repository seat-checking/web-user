import { Button } from 'components/form/atoms/Button';
import {
  Boundary,
  BtnsBackground,
  BtnsWrap,
  Chair,
  ChairBorder,
  GridTable,
  GridWrap,
  ReservationButton,
  Wrap,
} from 'components/store/SeatInfoTab/components/StoreLayout.styled';
import layoutData from 'components/store/SeatInfoTab/mock/getSpaceSeats.json';
import { useEffect, useState } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import type { GetShopLayoutResponse, ReservationUnit } from 'api/store/common';

type ReservationUnitType = 'CHAIR' | 'SPACE';

interface StoreLayoutProps {
  layout: GetShopLayoutResponse;
  isClickActive?: boolean;
  isSpaceClick?: boolean;
  setSelectedChair: any;
  selectedChair: any;
  reservationUnit: ReservationUnit;
}
/**
 * 좌석 배치 영역
 */
export const StoreLayout: React.FC<StoreLayoutProps> = ({
  layout,
  isClickActive,
  isSpaceClick,
  setSelectedChair,
  selectedChair,
  reservationUnit,
}) => {
  const handleClickChair = (id: string) => {
    setSelectedChair(id);
  };

  const initialReservationUnit = reservationUnit.chair ? 'CHAIR' : 'SPACE';
  console.log('initialReservationUnit :>> ', initialReservationUnit);

  const [currentReservationUnit, setCurrentReservationUnit] =
    useState<ReservationUnitType>(initialReservationUnit);

  const handleChangeReservationUnit = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLButtonElement)) {
      return;
    }
    const selectedUnit = event.target.dataset.type;
    if (selectedUnit === 'CHAIR' || selectedUnit === 'SPACE') {
      setCurrentReservationUnit(selectedUnit);
    }
  };

  useEffect(() => {
    setCurrentReservationUnit(initialReservationUnit);
  }, [setCurrentReservationUnit, reservationUnit, initialReservationUnit]);

  return (
    <>
      <Wrap isSpaceClick={isSpaceClick}>
        <Boundary>
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
                    <Chair>{chair.manageId}</Chair>
                  </ChairBorder>
                ))}
              </GridWrap>
            </TransformComponent>
          </TransformWrapper>
        </Boundary>
      </Wrap>
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
      <Button>좌석 사용하기</Button>
    </>
  );
};
