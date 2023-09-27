import styled from 'styled-components';

export const IntentWrapper = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputRadioGroup = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-bottom: 6rem;
`;
export const ModalHeader = styled.div`
  color: ${({ theme }) => theme.palette.grey[500]};
  font-size: 1.6rem;
  font-weight: 700;
  width: 100%;
  height: 4.3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grey[50]};
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
`;
export const ModaMainText = styled.div`
  color: black;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  padding-top: 2.4rem;
`;
export const ModaSubText = styled.div`
  color: ${({ theme }) => theme.palette.grey[500]};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 0.8rem;
`;
export const ModalHelperText = styled.div`
  color: ${({ theme }) => theme.palette.grey[300]};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 1.2rem;
`;

export const ModalColorText = styled.span`
  color: ${({ theme }) => theme.palette.primary.orange};
`;
export const ModalSeatNumberText = styled.div`
  color: ${({ theme }) => theme.palette.grey[500]};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  margin-top: 2.4rem;
`;

export const ModalCancel = styled.div`
  width: 12rem;
  height: 4.2rem;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grey[500]};
  font-size: 1.4rem;
  font-weight: 500;
`;
export const ModalButton = styled.div`
  width: 12rem;
  height: 4.2rem;
  background-color: ${({ theme }) => theme.palette.primary.orange};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
`;
export const ModalContent = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;
  width: 24.6rem;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
`;
