import styled from 'styled-components';

export const InputsWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
  height: 9.6rem;
  margin-bottom: 4rem;
`;

export const InputLabelWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const InputGroupWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 1.4rem;
`;

export const InputInnerWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const ResetIconWrapper = styled.div`
  position: absolute;
  top: 62%;
  right: 0;
  transform: translateY(-50%);
`;

export const ErrorMessageWrapper = styled.div`
  width: 90%;
  height: 2rem;
  margin: 0 auto;
  padding-top: 1rem;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${(porps): string => porps.theme.palette.error.main};
`;
export const SuccessMessageWrapper = styled.div`
  width: 90%;
  height: 2rem;
  margin: 0 auto;
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${(porps): string => porps.theme.palette.success.main};
`;

export const HelperTextWrapper = styled.div`
  width: 90%;
  height: 2rem;
  margin: 0 auto;
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${(porps): string => porps.theme.palette.grey[400]};
`;
