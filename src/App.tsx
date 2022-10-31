import { ThemeProvider, Global } from '@emotion/react';
import React from 'react';
import { useDarkMode } from 'hooks/useDarkMode';
import Router from 'Router';
import GlobalStyle from 'styles/globalStyle';

function App() {
  const { theme } = useDarkMode();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
