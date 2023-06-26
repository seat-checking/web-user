import styled from 'styled-components';

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  /* background-color: aqua; */
`;

export const LabelText = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.palette.grey[400]};
  margin-left: 1.6rem;
`;

export const RadioInput = styled.input`
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
  }

  &[type='radio']:hover {
    filter: brightness(95%);
    cursor: pointer;
  }
  &[type='radio']:hover + span {
    cursor: pointer;
  }
`;
