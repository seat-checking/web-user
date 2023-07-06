import styled from 'styled-components';

export const Form = styled.form`
  max-width: 67.5rem;
  width: 100%;
`;

export const IdCheckButton = styled.button`
  width: 9.1rem;
  height: 4rem;
  color: ${(porps): string => porps.theme.palette.primary.orange};
  background-color: white;
  border: 1px solid #ff8d4e;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
`;

export const InputCheckBoxBorderWrapper = styled.div`
  width: 90%;
  height: 3.2rem;
  margin: 0 auto;
  border-bottom: 1px solid #d8d9e1;
  line-height: 2.4rem;
  margin-bottom: 1.6rem;
  display: flex;
`;
export const InputSubCheckBoxWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  line-height: 2.4rem;
`;
export const ButtonWrapper = styled.div`
  margin-top: 4.4rem;
  margin-bottom: 4.8rem;
  text-align: center;
`;

export const InputAllCheckBoxLabel = styled.label`
  margin-left: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  color: ${(porps): string => porps.theme.palette.black.main};
`;

export const InputSubCheckBoxLabel = styled.label`
  margin-left: 1.4rem;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${(porps): string => porps.theme.palette.grey[300]};
`;
