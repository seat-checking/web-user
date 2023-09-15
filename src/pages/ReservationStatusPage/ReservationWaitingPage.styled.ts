import arrowIcon from 'assets/icons/iconBack_32.svg';
import styled from 'styled-components';

export const ListTitle = styled.div`
  max-width: 67.5rem;
  width: 100%;
  height: 10.8rem;
  font-weight: 500;
  font-size: 2rem;
  color: ${(props): string => props.theme.palette.black.main};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 0.1rem solid #ccc;
  z-index: 2;
  width: 12.1rem;
  border-radius: 0.8rem;
`;
export const DropdownItem = styled.button`
  width: 100%;
  padding: 10px;
  text-align: center;
  color: ${(props) => props.theme.palette.black.main};

  font-size: 1.4rem;
  font-weight: 500;

  &:first-child {
    border-bottom: 0.1rem solid ${(props) => props.theme.palette.grey[50]};
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
  &:hover {
    background-color: #ddd;
  }
`;

export const TitleText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ArrowIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${arrowIcon});
  cursor: pointer;
`;
