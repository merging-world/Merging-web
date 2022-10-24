import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

ReactDOM.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <Global styles={GlobalStyle} />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById('root'),
);
