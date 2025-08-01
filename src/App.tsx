//import React from 'react';
import './App.css';
import AppRouter from './routes';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { SearchProvider } from './context/SearchContext';

//import Theme from './components/Theme/Theme';
//import styled from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SearchProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;