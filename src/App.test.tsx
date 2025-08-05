//import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const renderWithProviders = () => {
  return render(
    <App />
  );
};



describe('Testando App', () => {
  it('Teste do AL SKIN logo', async () => {
    renderWithProviders();
    const alSkinLogo = await screen.findAllByText('AL SKIN');
    expect(alSkinLogo).toBeTruthy();
    // Há no Header e no Footer.
    expect(alSkinLogo).toHaveLength(2);
    //expect(screen.getByText('AL SKIN')).toBeInTheDocument();
  });
});


/*



  it('Teste da pesquisa', async () => {
    renderWithProviders();
    
    const searchInput = await screen.getByPlaceholderText('O que você está procurando?');
    
    fireEvent.change(searchInput, { target: { value: 'protetor solar' } });
    
    expect(searchInput).toHaveValue('protetor solar');
  });

  it('Abrir o Carrinho', async () => {
    renderWithProviders();
    
    const cartButton = await screen.getByTestId('cart-button');
    fireEvent.click(cartButton);
    
    // Verifica se o modal do carrinho foi aberto
    expect(screen.getByText('Carrinho')).toBeInTheDocument();
  });
  
*/