import { TabPanelItem, TabPanelWrapper } from './TabPanel.styled';
import type React from 'react';

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode | React.ReactNode[];
}

export const TabPanel = ({ value, index, children }: TabPanelProps) => {
  return (
    <TabPanelWrapper hidden={value !== index}>
      {value === index && <TabPanelItem>{children}</TabPanelItem>}
    </TabPanelWrapper>
  );
};
