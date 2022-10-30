import { ThemeProvider, Global } from '@emotion/react';
import * as ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>,
);
