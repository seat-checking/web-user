import {
  TabBox,
  TabItem,
} from 'components/reservationStatus/HistoryTab/HistoryTab.styled';
import { ApprovedList } from 'components/reservationStatus/reservationList/ApprovedList';
import { CancelledList } from 'components/reservationStatus/reservationList/CancelledList';
import { RejectedList } from 'components/reservationStatus/reservationList/RejectedList';
import { useState } from 'react';

export const HistoryTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderList = () => {
    if (activeTab === 0) return <ApprovedList />;
    if (activeTab === 1) return <RejectedList />;
    if (activeTab === 2) return <CancelledList />;
  };

  return (
    <>
      <TabBox>
        <TabItem active={activeTab === 0} onClick={() => setActiveTab(0)}>
          승인된 예약
        </TabItem>
        <TabItem active={activeTab === 1} onClick={() => setActiveTab(1)}>
          거절된 예약
        </TabItem>
        <TabItem active={activeTab === 2} onClick={() => setActiveTab(2)}>
          취소한 예약
        </TabItem>
      </TabBox>
      {renderList()}
    </>
  );
};
