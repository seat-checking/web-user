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
  padding-bottom: 1rem;

  /* Set the width of the scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px; /* For vertical scrollbar */
  }

  /* Track (background of scrollbar) */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Light gray background color */
  }

  /* Handle (scrollbar itself) */
  ::-webkit-scrollbar-thumb {
    background: #888; /* Dark gray color */
    border-radius: 3px; // 둥근 모서리를 적용
  }

  /* Handle color on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Slightly darker gray on hover */
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
