import { PATH } from 'common/utils/constants';
import { NavLink } from 'react-router-dom';
import {
  NavigationIconWrapper,
  NavigationMyicon,
  NavigationNotificationIcon,
  NavigationSearchIcon,
  NavigationStoreIcon,
  NavigationWrapper,
} from './Navigation.styled';
import type { VFC } from 'common/utils/types';

export const Navigation: VFC = () => {
  return (
    <NavigationWrapper>
      <NavigationIconWrapper>
        <NavLink to={`/${PATH.storeList}`}>
          {({ isActive }) => <NavigationStoreIcon active={isActive} />}
        </NavLink>
        <NavLink to={`/${PATH.search}`}>
          <NavigationSearchIcon />
        </NavLink>
        <NavLink to={`/${PATH.reservationStatus}`}>
          {({ isActive }) => <NavigationNotificationIcon active={isActive} />}
        </NavLink>
        <NavLink to={`/${PATH.myPage}`}>
          {({ isActive }) => <NavigationMyicon active={isActive} />}
        </NavLink>
      </NavigationIconWrapper>
    </NavigationWrapper>
  );
};
