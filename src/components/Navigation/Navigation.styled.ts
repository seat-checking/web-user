import myicon from 'assets/icons/myicon.svg';
import notificationIcon from 'assets/icons/notification.svg';
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
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 4.1rem;
`;

export const NavigationStoreIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  background-image: url(${storeIcon});
  background-repeat: no-repeat;
  background-size: cover;
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

export const NavigationNotificationIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  filter: #1a1c2d;
  background-image: url(${notificationIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const NavigationMyicon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  filter: #1a1c2d;
  background-image: url(${myicon});
  background-repeat: no-repeat;
  background-size: cover;
`;
