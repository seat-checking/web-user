import {
  TabBox,
  TabItem,
} from 'components/reservationStatus/HistoryTab/HistoryTab.styled';
import { ApprovedList } from 'components/reservationStatus/reservationList/ApprovedList';
import { CancelledList } from 'components/reservationStatus/reservationList/CancelledList';
import { RejectedList } from 'components/reservationStatus/reservationList/RejectedList';
import { WaitingList } from 'components/reservationStatus/reservationList/WaitingList';

import { useState } from 'react';

export const HistoryTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderList = () => {
    if (activeTab === 0) return <WaitingList />;
    if (activeTab === 1) return <ApprovedList />;
    if (activeTab === 2) return <RejectedList />;
    if (activeTab === 3) return <CancelledList />;
  };

  const handleTabChange = (index: number) => () => {
    setActiveTab(index);
  };

  return (
    <>
      <TabBox>
        <TabItem active={activeTab === 0} onClick={handleTabChange(0)}>
          대기중인 예약
        </TabItem>
        <TabItem active={activeTab === 1} onClick={handleTabChange(1)}>
          승인된 예약
        </TabItem>
        <TabItem active={activeTab === 2} onClick={handleTabChange(2)}>
          거절된 예약
        </TabItem>
        <TabItem active={activeTab === 3} onClick={handleTabChange(3)}>
          취소한 예약
        </TabItem>
      </TabBox>
      {renderList()}
    </>
  );
};
