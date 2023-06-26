import styled from 'styled-components';

export const InputRadiowrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const InputRadioGroup = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 2rem;
`;

export const InputRadioLabel = styled.label`
  display: flex;
  font-weight: 400;
  font-size: 1.4rem;
  gap: 2rem;
  color: ${(porps): string => porps.theme.palette.grey[400]};
`;

export const InfoText = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 21.7rem;
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${(porps): string => porps.theme.palette.grey[300]};
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 4.8rem;
  text-align: center;
`;
