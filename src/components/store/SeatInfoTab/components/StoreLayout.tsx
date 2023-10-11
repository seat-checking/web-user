import { PATH } from 'common/utils/constants';
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
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useReservationStore } from 'store/reservationStore';
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
  const navigate = useNavigate();
  const [selectedChairManageId, setSelectedChairManageId] = useState<
    number | null
  >(null);
  const [isSpaceSelected, setIsSpaceSelected] = useState(false);
  const setChairId = useReservationStore((state) => state.setChairId);
  const setSpaceId = useReservationStore((state) => state.setSpaceId);

  const selectedChairId = useRef<number | null>(null);

  const initialReservationUnit = reservationUnit.chair ? 'CHAIR' : 'SPACE';

  const [currentReservationUnit, setCurrentReservationUnit] =
    useState<ReservationUnitType>(initialReservationUnit);

  const handleSelectChair = (
    event: React.MouseEvent,
    manageId: number,
    id: number,
  ) => {
    event.stopPropagation();
    setSelectedChairManageId(manageId);
    selectedChairId.current = id;
  };

  const handleToggleSpace = () => {
    if (currentReservationUnit !== 'SPACE') {
      if (selectedChairManageId != null) {
        setSelectedChairManageId(null);
      }
      return;
    }
    setIsSpaceSelected((prev) => !prev);
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
      setSelectedChairManageId(null);
    }
  };

  const handleUse = () => {
    if (
      currentReservationUnit === 'CHAIR' &&
      selectedChairId.current !== null
    ) {
      setChairId(selectedChairId.current);
      navigate(`/${PATH.seatReservation}`);
      return;
    }
    setSpaceId(currentSpace.storeSpaceId);
    navigate(`/${PATH.spaceReservation}`);
  };

  const getButtonText = () => {
    if (currentReservationUnit === 'CHAIR') {
      if (selectedChairManageId == null) {
        return '좌석 사용하기';
      }
      return selectedChairManageId + '번 좌석 사용하기';
    }
    if (!isSpaceSelected) {
      return '스페이스 사용하기';
    }
    return `${currentSpace.name} 사용하기`;
  };

  useEffect(() => {
    // 초기화
    setSelectedChairManageId(null);
    setIsSpaceSelected(false);
    setCurrentReservationUnit(initialReservationUnit);
  }, [setCurrentReservationUnit, reservationUnit, initialReservationUnit]);

  return (
    <>
      <GrayBorderBox>
        <LayoutBoundary
          onClick={handleToggleSpace}
          isClickable={
            currentReservationUnit === 'SPACE' && isSpaceSelected === false
          }
          isSelected={isSpaceSelected}
        >
          <TransformWrapper maxScale={3} doubleClick={{ disabled: true }}>
            {({ resetTransform }) => {
              resetTransform();
              return (
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
                          onClick={(e) =>
                            handleSelectChair(e, chair.manageId, chair.i)
                          }
                          isClickable={
                            currentReservationUnit === 'CHAIR' &&
                            selectedChairManageId == null
                          }
                          isSelected={selectedChairId.current === chair.i}
                        >
                          {chair.manageId}
                        </Chair>
                      </ChairBorder>
                    ))}
                  </GridWrap>
                </TransformComponent>
              );
            }}
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
        disabled={selectedChairManageId == null && isSpaceSelected === false}
      >
        {getButtonText()}
      </Button>
    </>
  );
};
