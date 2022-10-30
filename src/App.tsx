import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDarkMode } from 'hooks/useDarkMode';
import Home from 'pages/Home/Home';
import Shop from 'pages/Shop/Shop';

function App() {
  const { theme } = useDarkMode();

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
