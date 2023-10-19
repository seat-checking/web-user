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
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // 스크롤바 유무에 의해 레이아웃이 흐트러지는 걸 막기 위함
  max-width:67.5rem;
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
