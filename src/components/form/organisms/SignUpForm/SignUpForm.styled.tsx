import styled from 'styled-components';

export const Form = styled.form`
  max-width: 675px;
  width: 100%;
`;

export const IdCheckButton = styled.button`
  width: 91px;
  height: 40px;
  color: ${(porps): string => porps.theme.palette.primary.main};
  background-color: white;
  border: 1px solid #ff8d4e;
  border-radius: 5px;
  cursor: pointer;
`;

export const InputCheckBoxBorderWrapper = styled.div`
  width: 80%;
  height: 32px;
  margin: 0 auto;
  border-bottom: 1px solid #d8d9e1;
  line-height: 24px;
  margin-bottom: 16px;
  display: flex;
`;
export const InputSubCheckBoxWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  line-height: 24px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 44px;
  margin-bottom: 48px;
  text-align: center;
`;

export const InputAllCheckBoxLabel = styled.label`
  margin-left: 8px;
  font-weight: 700;
  font-size: 16px;
  color: ${(porps): string => porps.theme.palette.black.main};
`;

export const InputSubCheckBoxLabel = styled.label`
  margin-left: 14px;
  font-weight: 400;
  font-size: 12px;
  color: ${(porps): string => porps.theme.palette.grey[300]};
`;
