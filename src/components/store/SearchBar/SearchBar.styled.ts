import searchIcom from 'assets/icons/searchbaricon.svg';
import styled from 'styled-components/macro';

export const SearchBarWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SearchInputWrapper = styled.div`
  text-align: center;
  width: 80%;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 4.1rem;
  border-radius: 0.4rem;
  background-color: ${(props): string => props.theme.palette.grey[100]};
  font-weight: 500;
  font-size: 1.6rem;
  color: ${(props): string => props.theme.palette.grey[500]};
  background-image: url(${searchIcom});
  background-position: 1rem 48%;
  background-repeat: no-repeat;
  padding-left: 3.4rem;

  &::placeholder {
    color: ${(props): string => props.theme.palette.grey[300]};
    font-weight: 500;
    font-size: 1.6rem;
  }
`;

export const ResetbtnWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 1.25rem;
`;
