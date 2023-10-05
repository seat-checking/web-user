import React from 'react';
import { Wrapper } from './Tabs.styled';

interface TabsProps {
  value: number;
  onChange: (newValue: number) => void;
  children: React.ReactElement[];
  withOutBorderTop?: boolean;
}

export const Tabs = ({
  children,
  value,
  onChange,
  withOutBorderTop,
}: TabsProps) => {
  let nextIndex = 0;
  return (
    <Wrapper withOutBorderTop={withOutBorderTop}>
      {children.map((child) => {
        const index = nextIndex++;

        return React.cloneElement(child, {
          key: index,
          active: index === value,
          onClick: () => onChange(index),
        });
      })}
    </Wrapper>
  );
};
Tabs.defaultProps = {
  withOutBorderTop: false,
};
