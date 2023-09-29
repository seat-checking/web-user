import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html {
    font-size: 62.5%; // 1rem = 10px 로 변경
  }


  body {
    max-width: 67.5rem;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;  -webkit-font-smoothing: antialiased;
    margin:0 auto;
  }
  
  input {
    border: none;
    outline: none;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
`;
