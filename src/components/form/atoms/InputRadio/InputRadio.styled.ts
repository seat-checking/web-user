import styled, { css } from 'styled-components/macro';

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
`;

export const LabelText = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.palette.grey[300]};
  margin-left: 1.6rem;
`;

export const RadioInput = styled.input<{ $size?: 'small' | 'medium' }>`
  &[type='radio'] {
    appearance: none;

    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    border: 0.15rem solid ${({ theme }) => theme.palette.grey[200]};
    background-color: ${({ theme }) => theme.palette.grey[50]};

    transition: border 0.2s ease-in-out;
  }
  &[type='radio']:checked {
    width: 2.4rem;
    height: 2.4rem;
    outline: 0.3rem solid ${({ theme }) => theme.palette.primary.orange};
    border: 0.3rem solid white;
    background-color: ${({ theme }) => theme.palette.primary.orange};
    margin: 0.3rem;

    & + .label {
      color: black;
    }
  }

  ${({ $size }) =>
    $size === 'small' &&
    css`
      &[type='radio'] {
        width: 2rem;
        height: 2rem;
      }

      &[type='radio']:checked {
        width: 1.6rem;
        height: 1.6rem;
        outline: 0.2rem solid ${({ theme }) => theme.palette.primary.orange};
        border: 0.2rem solid white;
        background-color: ${({ theme }) => theme.palette.primary.orange};
        margin: 0.2rem;
      }
    `}

  &[type='radio']:hover {
    filter: brightness(95%);
    cursor: pointer;
  }
  &[type='radio']:hover + span {
    cursor: pointer;
  }
`;
