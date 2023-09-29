import styled, { css } from 'styled-components';
import { flexSet } from 'styles/mixin';

export const Wrap = styled.div<{ isSpaceClick?: boolean }>`
  padding: 1.6rem;
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
  background-color: ${({ theme }) => theme.palette.grey[100]};

  ${({ isSpaceClick }) =>
    isSpaceClick &&
    css`
      outline: 5px solid red;
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
      }
    `}
`;

export const Boundary = styled.div`
  width: 100%;
  height: 19.7rem;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  overflow: hidden;

  border-radius: 0.4rem;

  @media (min-width: 412px) {
    height: 24rem;
  }
  @media (min-width: 512px) {
    height: 30rem;
  }
  @media (min-width: 612px) {
    height: 36rem;
  }
`;

export const getGridCellSizeRem = () => {
  if (window.innerWidth > 612) {
    return 1.9;
  }
  const WIDTH_CELL_RATIO = 0.032;
  return Math.floor(window.innerWidth * WIDTH_CELL_RATIO) / 10;
};

const GRID_CELL_SIZE_REM = getGridCellSizeRem();
const GRID_CHAIR_SIZE_REM = GRID_CELL_SIZE_REM - 0.28;

export const GridWrap = styled.div`
  background-color: aqua;
  width: 1024px;
  /* width: 100%; */
  height: 700px;
  /* height: calc(${GRID_CELL_SIZE_REM}rem * 15); */
`;

export const GridTable = styled.div<{
  width: number;
  height: number;
  x: number;
  y: number;
}>`
  position: absolute;
  background-color: ${(props): string => props.theme.palette.grey[100]};

  border-color: ${({ theme }) => theme.palette.black.main};
  border-width: 0.1rem;
  border-style: solid;

  width: ${({ width }) => width * GRID_CELL_SIZE_REM + 'rem'};
  height: ${({ height }) => height * GRID_CELL_SIZE_REM + 'rem'};
  transform: translate(
    ${({ x, y }) =>
      `${x * GRID_CELL_SIZE_REM}rem, ${y * GRID_CELL_SIZE_REM}rem`}
  );
`;

// 의자 바깥에 투명한 테두리를 넣기 위함
export const ChairBorder = styled.div<{
  x: number;
  y: number;
}>`
  width: ${GRID_CELL_SIZE_REM}rem;
  height: ${GRID_CELL_SIZE_REM}rem;

  position: absolute;
  transform: translate(
    ${({ x, y }) =>
      `${x * GRID_CELL_SIZE_REM}rem, ${y * GRID_CELL_SIZE_REM}rem`}
  );
  ${flexSet()};
`;

// 검정 테두리를 준 의자 영역
export const Chair = styled.div<{
  isClickable?: boolean;
  isSelected?: boolean;
}>`
  background-color: ${(props): string => props.theme.palette.grey[100]};

  width: ${GRID_CHAIR_SIZE_REM}rem;
  height: ${GRID_CHAIR_SIZE_REM}rem;

  border: 0.1rem solid ${({ theme }) => theme.palette.black.main};

  border-radius: 50%;
  transition: all 0.1s ease;

  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
      border: 0.1rem solid rgba(147, 63, 255, 0.5); // clickable
    `};
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 0.1rem solid #933fff; // clicked
      box-shadow: 0px 0px 0.3rem 0.15rem rgba(147, 63, 255, 0.5); //clicked
    `};
`;
