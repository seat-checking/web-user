import myIconActive from 'assets/icons/myIconActive.svg';
import myicon from 'assets/icons/myicon.svg';
import notificationIcon from 'assets/icons/notification.svg';
import notificationActive from 'assets/icons/notificationActive.svg';
import searchIcon from 'assets/icons/searchicon.svg';
import storeListIconActive from 'assets/icons/storeListIconActive.svg';
import storeIcon from 'assets/icons/storelisticon.svg';
import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
  position: fixed;
  left: 50%;
  right: auto;
  bottom: 0;
  transform: translateX(-50%);
  height: 8.4rem;
  border-top: 0.1rem solid #e8e8e8;
  background-color: #ffffff;
`;

export const NavigationIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const NavigationStoreIcon = styled.div<{ active: boolean }>`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  // background-image: url(${storeIcon});
  background-image: url(${({ active }) =>
    active ? storeListIconActive : storeIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NavigationSearchIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NavigationNotificationIcon = styled.div<{ active: boolean }>`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  background-image: url(${({ active }) =>
    active ? notificationActive : notificationIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const NavigationMyicon = styled.div<{ active: boolean }>`
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  background-image: url(${({ active }) => (active ? myIconActive : myicon)});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const TabContentWrapper = styled.div`
  /* 스타일을 추가해주세요 */
`;
