import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FormProvider } from 'context/FormProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { myTheme } from './theme/theme';

const queryclient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <FormProvider>
        <QueryClientProvider client={queryclient}>
          <GoogleOAuthProvider clientId='169343984623-lq9lvl7ir9nusto7qalvdv4i667t7cdo.apps.googleusercontent.com'>
            <App />
            <GlobalStyles />
          </GoogleOAuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
