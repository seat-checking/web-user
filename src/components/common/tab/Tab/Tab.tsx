import React from 'react';
import { Text, TextWrapper, Wrapper } from './Tab.styled';

interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const Tab = ({ label, active, onClick }: TabProps) => {
  return (
    <Wrapper onClick={onClick}>
      <TextWrapper active={active}>
        <Text>{label}</Text>
      </TextWrapper>
    </Wrapper>
  );
};
