import { ThemeProvider } from '@emotion/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import App from './App';
import theme from 'styles/theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      {/* TODO: 질문하기 */}
      {/*<ThemeProvider theme={theme}>*/}
      <App />
      {/*</ThemeProvider>*/}
    </QueryClientProvider>
  </RecoilRoot>,
);
