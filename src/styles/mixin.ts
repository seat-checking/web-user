import styled, { css } from 'styled-components';
import type { RuleSet } from 'styled-components';

export const flexSet = (
  justify = 'center',
  align = 'center',
): RuleSet<object> => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;
