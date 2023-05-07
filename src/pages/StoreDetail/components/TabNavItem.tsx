import { css, styled } from 'styled-components';
import type { VFC } from 'common/utils/types';
import type { HTMLAttributes } from 'react';
import type { RuleSet } from 'styled-components';

interface Props extends HTMLAttributes<HTMLLIElement> {
  text: string;
  index: number;
  activeTab: number;
}

/**
 * Tab Navigation 아이템 컴포넌트
 */
export const TabNavItem: VFC<Props> = ({
  text,
  index,
  activeTab,
  ...props
}) => {
  return (
    <ListItem {...props}>
      <Button type='button'>
        <Text active={activeTab === index}>{text}</Text>
      </Button>
    </ListItem>
  );
};
const ListItem = styled.li`
  flex: 1;
`;

const Button = styled.button<{ active?: boolean }>`
  width: 100%;
  height: 100%;

  color: '#A9ABB6';
`;

const Text = styled.span<{ active?: boolean }>`
  width: fit-content;
  height: 100%;
  margin: auto;

  justify-content: center;
  align-items: center;
  display: flex;

  font-size: 1.6rem;
  font-weight: 700;
  color: #a9abb6;

  ${(props): RuleSet<object> | false | undefined =>
    props.active &&
    css`
      color: ${props.theme.color.orange};
      box-shadow: 0 -0.3rem ${props.theme.color.orange} inset; // 위치 고정한채로 안쪽에 테두리 생기도록함
    `};
`;
