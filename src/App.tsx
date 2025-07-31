import React from 'react';
import './App.css';
import AppRouter from './routes';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;