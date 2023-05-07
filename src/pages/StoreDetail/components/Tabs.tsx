import { TabNavItem } from 'pages/StoreDetail/components/TabNavItem';
import { useState } from 'react';
import { styled } from 'styled-components';
import type { VFC } from 'common/utils/types';

interface TabItem {
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

const TabContainer = styled.ul`
  display: flex;
  height: 4.8rem;

  box-shadow: inset 0px -0.1rem 0px #efefef;

  /* background-color: yellow; */
`;
