import styled from 'styled-components';

export const CalendarInfo = styled.div`
  width: 100%;
  height: 4.7rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid #ecf0f2;
`;

export const CalendarDate = styled.div`
  color: ${(props): string => props.theme.palette.black.main};
  font-size: 1.6rem;
  font-weight: 700;
  margin-left: 2rem;
`;

export const TimesWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap; /* Prevent wrapping to the next row */
  overflow-x: auto;
  padding-top: 4rem;

  /* Hide the scrollbar while keeping the scroll functionality */
  ::-webkit-scrollbar {
    width: 6px; /* Set the width of the scrollbar */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; /* You can set a background color if needed */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent; /* Set the scrollbar handle color */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: transparent; /* Set the scrollbar handle color on hover */
  }
`;

export const HelperText = styled.div`
  width: 90%;
  color: #9a9a9a;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 auto;
  margin-top: 0.8rem;
`;

export const UseColorWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  gap: 4rem;
  margin: 0 auto;
  margin-top: 0.9rem;
`;

export const ColorText = styled.div`
  color: #9a9a9a;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  gap: 0.8rem;
`;
export const AvailableColor = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  background-color: ${(props): string => props.theme.palette.primary.orange};
`;

export const NotAvailable = styled.span`
  width: 1.3rem;
  height: 1.3rem;
  background-color: ${(props): string => props.theme.palette.grey[200]};
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 2.9rem;
`;
