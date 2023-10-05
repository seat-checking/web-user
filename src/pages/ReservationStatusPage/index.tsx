import { PATH } from 'common/utils/constants';
import { Navigation } from 'components/Navigation';

import { SpaceListTab } from 'components/reservationStatus/SpaceListTab';
import { UseListTab } from 'components/reservationStatus/UseListTab';
import {
  ArrowIcon,
  DropdownItem,
  DropdownMenu,
  ListTitle,
  TitleText,
} from 'pages/ReservationStatusPage/ReservationWaitingPage.styled';
import { useEffect, useRef, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import type { VFC } from 'common/utils/types';

export const UsageStatus = () => (
  <>
    <UseListTab />
    <Navigation />
  </>
);

export const SpaceParticipation = () => (
  <>
    <SpaceListTab />
    <Navigation />
  </>
);

export const ReservationWaitingPage: VFC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') as
    | 'usageStatus'
    | 'spaceParticipation'
    | null;

  const [showDropdown, setShowDropdown] = useState(false);
  const [currentComponent, setCurrentComponent] = useState<
    'usageStatus' | 'spaceParticipation' | null
  >(initialTab || 'usageStatus');

  const handleListTitleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = (item: 'usageStatus' | 'spaceParticipation') => {
    setCurrentComponent(item);
    setShowDropdown(false);

    navigate(`/${PATH.reservationStatus}?tab=${item}`);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    // 클릭 이벤트 리스너를 추가
    document.addEventListener('click', handleClickOutside);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);
  return (
    <>
      <ListTitle>
        <TitleText onClick={handleListTitleClick}>
          {currentComponent === 'usageStatus'
            ? '이용 현황'
            : currentComponent === 'spaceParticipation'
            ? '스페이스 참여'
            : '이용 현황'}
          <ArrowIcon />
        </TitleText>
      </ListTitle>
      {showDropdown && (
        <DropdownMenu ref={dropdownRef}>
          <DropdownItem onClick={() => handleItemClick('usageStatus')}>
            이용 현황
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick('spaceParticipation')}>
            스페이스 참여
          </DropdownItem>
        </DropdownMenu>
      )}
      {currentComponent === 'usageStatus' && <UsageStatus />}
      {currentComponent === 'spaceParticipation' && <SpaceParticipation />}
    </>
  );
};
