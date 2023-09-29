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

interface StoreLayoutProps {
  isClickActive?: boolean;
  isSpaceClick?: boolean;
  setSelectedChair: any;
  selectedChair: any;
}
/**
 * 좌석 배치 영역
 */
export const StoreLayout: React.FC<StoreLayoutProps> = ({
  isClickActive,
  isSpaceClick,
  setSelectedChair,
  selectedChair,
}) => {
  const handleClickChair = (id: string) => {
    setSelectedChair(id);
  };

  return (
    <Wrap isSpaceClick={isSpaceClick}>
      <Boundary>
        <TransformWrapper>
          <TransformComponent>
            <GridWrap>
              {layoutData.tableList.map((table) => (
                <GridTable
                  key={table.storeTableId}
                  width={table.width}
                  height={table.height}
                  x={table.tableX}
                  y={table.tableY}
                >
                  {table.storeTableId}
                </GridTable>
              ))}

              {layoutData.chairList.map((chair) => (
                <ChairBorder
                  key={chair.storeChairId}
                  x={chair.chairX}
                  y={chair.chairY}
                >
                  <Chair />
                </ChairBorder>
              ))}
            </GridWrap>
          </TransformComponent>
        </TransformWrapper>
      </Boundary>
    </Wrap>
  );
};
