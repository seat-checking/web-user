import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [activeIcon, setActiveIcon] = useState('store');

  const handleClick = (iconName: string) => {
    setActiveIcon(iconName);
  };
  return (
    <NavigationWrapper>
      <NavigationIconWrapper>
        <Link to='/storelist'>
          <NavigationStoreIcon
            onClick={() => handleClick('store')}
            active={activeIcon === 'store'}
          />
        </Link>
        <Link to='/search'>
          <NavigationSearchIcon />
        </Link>
        <NavigationNotificationIcon
          onClick={() => handleClick('notification')}
          active={activeIcon === 'notification'}
        />
        <Link to='/myPage'>
          <NavigationMyicon
            onClick={() => handleClick('my')}
            active={activeIcon === 'my'}
          />
        </Link>
      </NavigationIconWrapper>
    </NavigationWrapper>
  );
};
