import React from 'react';
import { TypingCounter, TypingCountWrapper } from './TypingCount.styled';
import type { VFC } from 'common/utils/types';

interface TypingCountProps {
  current?: number;
  maximum?: number;
  typingrequired?: boolean;
}

export const TypingCount: VFC<TypingCountProps> = ({
  current,
  maximum,
  typingrequired,
}) => {
  return (
    <TypingCountWrapper>
      {typingrequired && (
        <TypingCounter>
          {current} / {maximum}
        </TypingCounter>
      )}
    </TypingCountWrapper>
  );
};
