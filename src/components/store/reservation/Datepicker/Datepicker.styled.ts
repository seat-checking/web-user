import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
.react-datepicker {
    font-size: 1.4em; 
    border-radius: 0.8rem;
    border: 0.1rem solid ${(props): string => props.theme.palette.grey[200]};
    box-shadow: none; 
    

  }

  .react-datepicker__month-container {
    width: 34.3rem; 
    height: 32.8rem; 

  
  .react-datepicker__header {
    padding-top: 1rem;
    background-color:#fff;
    border-bottom: none;
    border-top-left-radius: 0.8rem;  
    border-top-right-radius: 0.8rem;  
  }


  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    width: 4.51rem;
    line-height: 3.6rem;
    color: ${(props): string => props.theme.palette.grey[500]};
    font-weight: 600;
  }
  .react-datepicker__day--selected {
    background-color: ${(props): string => props.theme.palette.primary.orange};
  }
  .react-datepicker__day--outside-month {
    color: ${(props): string => props.theme.palette.grey[300]};
  }
  .react-datepicker__day--keyboard-selected {
    background-color: #fff;
  }
  .react-datepicker__day--selected {
    color: white; 
  }

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36rem;
  background-color: ${(props): string => props.theme.palette.grey[50]};
`;
export const CustomHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #fff;
  padding-top: 1rem;
`;

export const CustomHeaderButton = styled.button`
  width: 2.1rem;
  height: 2.1rem;
  border: none;
  cursor: pointer;
`;

export const CustomHeaderMonth = styled.div`
  color: black;
  font-size: 1.6rem;
  font-weight: 700;
`;
