import styled from 'styled-components';

export const InputCheckBoxWrapper = styled.div`
  max-width: 675px;
`;

export const Input = styled.input`
appearance: none;
border: 1.5px solid gainsboro;
border-radius: 32px;
width: 24px;
height: 24px;
cursor: pointer;
background-image: url("./images/checkbox.png");
background-size: 100% 100%;
background-position: 50%;
background-repeat: no-repeat;

&:checked {
  border-color: transparent;
  background-image: url("./images/checkedbox.png");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #ff8d4e;`;
