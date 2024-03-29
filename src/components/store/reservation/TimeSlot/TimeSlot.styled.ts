import styled from 'styled-components';

interface BoxProps {
  isSelected: boolean;
  isActivated: boolean;
}

export const Slot = styled.div``;

export const Line = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  width: 0.1rem;
  height: 1rem;
  background-color: #eaebec;
  margin-left: 2.3rem;
  margin-top: 0.1rem;
`;

export const Box = styled.div<BoxProps>`
  width: 4.6rem;
  height: 3rem;
  margin: 0.05rem;
  padding: 0.1rem;
  position: relative;
  tabindex: 0;
  role: 'button';

  cursor: ${({ isActivated }) => (isActivated ? 'pointer' : 'not-allowed')};
  background-color: ${({ isActivated, isSelected }) =>
    isActivated ? (isSelected ? '#FF8D4E' : '#FFDDCA') : '#D8D9E1'};
`;

export const SubBox = styled.div`
  width: 4.5rem;
  height: 0.3rem;
  background-color: #bbe0eb;
  margin: 0.05rem;
  padding: 0.1rem;
`;

export const TimeLabel = styled.div`
  position: absolute;
  top: -2.4rem;
  right: -1.5rem;
`;
