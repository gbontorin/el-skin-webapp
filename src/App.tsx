//import React from 'react';
import './App.css';
import AppRouter from './routes';
import { CartProvider } from './context/CartContext';

//import Theme from './components/Theme/Theme';
//import styled from 'styled-components';

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;