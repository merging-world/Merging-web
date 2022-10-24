import { Global, ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

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
