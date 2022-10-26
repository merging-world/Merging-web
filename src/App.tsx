import { Global, useTheme } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDarkMode } from 'hooks/useDarkMode';
import Home from 'pages/Home/Home';
import Shop from 'pages/Shop/Shop';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

function App() {
  const { theme } = useDarkMode();

  return (
    <div>
      <Global styles={GlobalStyle(theme)} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
