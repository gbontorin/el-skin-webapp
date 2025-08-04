//import React from 'react';
import './App.css';
import AppRouter from './routes';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
//import { SearchProvider } from './context/SearchContext';
import { Provider } from 'react-redux';
import { store } from './store';

//import Theme from './components/Theme/Theme';
//import styled from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;