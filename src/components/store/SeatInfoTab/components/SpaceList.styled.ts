import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 1.2rem;

  background-color: ${({ theme }) => theme.palette.grey[200]};
  padding: 1.6rem;
`;

export const SpaceBtn = styled.button<{ isActive: boolean }>`
  padding: 0.6rem 1.6rem;

  border-radius: 0.6rem;

  background-color: white;
  border: 1px solid ${({ theme }) => theme.palette.grey[100]};
  color: ${({ theme }) => theme.palette.grey[500]};

  ${({ isActive }) =>
    !isActive &&
    css`
      &:hover {
        filter: brightness(70%);
      }
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      border: none;
      background-color: ${({ theme }) => theme.palette.grey[500]};
      color: white;
    `}

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
`;
