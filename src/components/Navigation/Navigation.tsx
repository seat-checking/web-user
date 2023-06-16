import { PATH } from 'common/utils/constants';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <NavLink to={`/${PATH.notification}`}>
          {({ isActive }) => <NavigationNotificationIcon active={isActive} />}
        </NavLink>
        <NavLink to={`/${PATH.myPage}`}>
          {({ isActive }) => <NavigationMyicon active={isActive} />}
        </NavLink>
      </NavigationIconWrapper>
    </NavigationWrapper>
  );
};
