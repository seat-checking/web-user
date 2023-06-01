import searchIcon from 'assets/icons/searchicon.svg';
import storeIcon from 'assets/icons/storelisticon.svg';
import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8.4rem;
  border-top: 1px solid #e8e8e8;
`;

export const NavigationIconWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 12.9rem;
`;

export const NavigationStoreIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  background-image: url(${storeIcon});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
`;

export const NavigationSearchIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  filter: #1a1c2d;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;
