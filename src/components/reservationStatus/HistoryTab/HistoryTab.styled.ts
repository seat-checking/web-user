import styled from 'styled-components';

interface TabItemProps {
  active: boolean;
}

export const TabBox = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: ${(props): string => props.theme.palette.grey[50]};
`;

export const TabItem = styled.div<TabItemProps>`
  width: 8.5rem;
  height: 3.6rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${(props): string => props.theme.palette.grey[200]};
  background: #fff;
  cursor: pointer;
  color: ${(props): string => props.theme.palette.grey[500]};
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.active ? props.theme.palette.grey[500] : '#fff'};
  color: ${(props) => (props.active ? '#FFF' : props.theme.palette.grey[500])};

  &:first-child {
    margin-left: 1.6rem;
  }
`;
