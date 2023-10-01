import {
  Boundary,
  Chair,
  ChairBorder,
  GridTable,
  GridWrap,
  Wrap,
} from 'components/store/SeatInfoTab/components/StoreLayout.styled';
import layoutData from 'components/store/SeatInfoTab/mock/getSpaceSeats.json';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import type { GetShopLayoutResponse } from 'api/store/common';

interface StoreLayoutProps {
  layout: GetShopLayoutResponse | undefined;
  isClickActive?: boolean;
  isSpaceClick?: boolean;
  setSelectedChair: any;
  selectedChair: any;
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
}) => {
  const handleClickChair = (id: string) => {
    setSelectedChair(id);
  };

  if (!layout) {
    return null;
  }

  return (
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
  );
};
