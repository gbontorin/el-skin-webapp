import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartProvider } from '../../context/CartContext';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { store } from '../../store';
import { theme } from '../../styles/theme';
import Header from './Header';
import Footer from '../Footer/Footer';

const renderWithProviders = () => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CartProvider>
          <Header />
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </Provider>
  );
};

describe('Testando o Header', () => {
  it('Teste do AL SKIN logo', async () => {
    renderWithProviders();
    const alSkinLogo = await screen.findAllByText('AL SKIN');
    expect(alSkinLogo).toBeTruthy();
    // Há no Header e no Footer.
    expect(alSkinLogo).toHaveLength(2);
    //expect(screen.getByText('AL SKIN')).toBeInTheDocument();
  });

  it('Teste da pesquisa', async () => {
    renderWithProviders();

    const searchInput = await screen.getByPlaceholderText(
      'O que você está procurando?'
    );

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

  it('should update search term when typing in search input', () => {
    renderWithProviders();

    const searchInput = screen.getByPlaceholderText(
      'O que você está procurando?'
    );

    fireEvent.change(searchInput, { target: { value: 'protetor solar' } });

    expect(searchInput).toHaveValue('protetor solar');
  });

  it('should clear search when clear button is clicked', () => {
    renderWithProviders();

    const searchInput = screen.getByPlaceholderText(
      'O que você está procurando?'
    );

    // Primeiro adiciona texto
    fireEvent.change(searchInput, { target: { value: 'protetor solar' } });
    expect(searchInput).toHaveValue('protetor solar');

    // Depois clica no botão limpar
    const clearButton = screen.getByTestId('clear-search-button');
    fireEvent.click(clearButton);

    expect(searchInput).toHaveValue('');
  });

  it('should open cart modal when cart button is clicked', () => {
    renderWithProviders();

    const cartButton = screen.getByTestId('cart-button');
    fireEvent.click(cartButton);

    // Verifica se o modal do carrinho foi aberto
    expect(screen.getByText('Carrinho')).toBeInTheDocument();
  });
});
