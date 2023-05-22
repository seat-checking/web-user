import styled from 'styled-components';

export const InputRadiowrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const InputRadioGroup = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const InputRadioLabel = styled.label`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  gap: 20px;
  color: ${(porps): string => porps.theme.palette.grey[400]};
`;

export const InfoText = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 217px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  color: ${(porps): string => porps.theme.palette.grey[300]};
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 48px;
  text-align: center;
`;
