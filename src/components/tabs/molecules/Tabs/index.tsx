import { TabNavItem } from 'components/tabs/atoms/TabNavItem';
import { TabContainer } from 'components/tabs/atoms/TabNavItem/styled';
import { useState } from 'react';

import type { VFC } from 'common/utils/types';

export interface TabItem {
  text: string;
  content: JSX.Element;
}

interface Props {
  tabList: TabItem[];
}

/**
 * 탭 메뉴 컴포넌트
 */
export const Tabs: VFC<Props> = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onClickItem = (index: number): void => {
    setActiveTab(index);
  };

  const tabNavItemList = tabList.map(
    (item, index): JSX.Element => (
      <TabNavItem
        key={item.text}
        index={index}
        text={item.text}
        activeTab={activeTab}
        onClick={(): void => onClickItem(index)}
      />
    ),
  );

  return (
    <div>
      <TabContainer>{tabNavItemList}</TabContainer>
      {tabList[activeTab].content}
    </div>
  );
};
