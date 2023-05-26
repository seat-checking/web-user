import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TextWrapper = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  color: ${({ theme, active }) =>
    active ? theme.palette.primary.main : theme.palette.grey[300]};
  border-bottom: ${({ theme, active }) =>
    active ? `3px solid ${theme.palette.primary.main}` : 'none'};

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const Text = styled.span``;
