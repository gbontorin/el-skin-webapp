//import React from 'react';
import './App.css';
import AppRouter from './routes';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

//import Theme from './components/Theme/Theme';
//import styled from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;