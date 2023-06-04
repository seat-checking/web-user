import React from 'react';
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
        <NavigationStoreIcon />
        <NavigationSearchIcon />
        <NavigationNotificationIcon />
        <NavigationMyicon />
      </NavigationIconWrapper>
    </NavigationWrapper>
  );
};
