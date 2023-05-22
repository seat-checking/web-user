import styled from 'styled-components';

export const InputsWrapper = styled.div`
  max-width: 675px;
  width: 100%;
  height: 96px;
  margin-bottom: 69px;
`;

export const InputLabelWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const InputGroupWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  gap: 14px;
`;

export const InputInnerWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const ResetIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const ErrorMessageWrapper = styled.div`
  width: 80%;
  height: 20px;
  margin: 0 auto;
  padding-top: 10px;
  font-weight: 400;
  font-size: 12px;
  color: ${(porps): string => porps.theme.palette.error.main};
`;
export const SuccessMessageWrapper = styled.div`
  width: 80%;
  height: 20px;
  margin: 0 auto;
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  color: ${(porps): string => porps.theme.palette.success.main};
`;

export const HelperTextWrapper = styled.div`
  width: 80%;
  height: 20px;
  margin: 0 auto;
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  color: ${(porps): string => porps.theme.palette.grey[400]};
`;
