import React from 'react';
import { Wrapper } from './Tabs.styled';

interface TabsProps {
  value: number;
  onChange: (newValue: number) => void;
  children: React.ReactElement[];
}

export const Tabs = ({ children, value, onChange }: TabsProps) => {
  let nextIndex = 0;
  return (
    <Wrapper>
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
