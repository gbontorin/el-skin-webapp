/* eslint-disable @typescript-eslint/no-var-requires */
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import ProductGrid from './ProductGrid';
import { CartProvider } from '../../context/CartContext';
//import { productService } from '../../services';
import { theme } from '../../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../../store';

// Mock do hook useGetProductsQuery do Redux Toolkit
jest.mock('../../store/api/apiSlice', () => {
  const originalModule = jest.requireActual('../../store/api/apiSlice');
  return {
    ...originalModule,
    useGetProductsQuery: jest.fn(),
    // Mock das propriedades que a store precisa
    reducerPath: 'api', // Valor fixo para o caminho do reducer
    reducer: jest.fn(), // Mock da função reducer
    middleware: jest.fn(), // Mock do middleware, caso seja usado
  };
});

const mockUseGetProductsQuery =
  require('../../store/api/apiSlice').useGetProductsQuery;

let mockSearchTerm = '';

jest.mock('../../hooks/useSearch', () => ({
  useSearch: () => ({
    search: mockSearchTerm,
    setSearch: jest.fn(),
    clearSearch: jest.fn(),
  }),
}));

const mockAddItem = jest.fn();

jest.mock('../../hooks/useCart', () => ({
  useCart: () => ({
    addItem: mockAddItem,
    items: [],
    removeItem: jest.fn(),
    updateQuantity: jest.fn(),
    clearCart: jest.fn(),
    getTotalItems: () => 0,
    totalPrice: 0,
  }),
}));

const mockProducts = [
  {
    id: '1',
    name: 'Produto 1',
    description: 'Descrição do produto 1',
    price: 99.99,
    image: '/image1.jpg',
    tags: [{ label: 'Proteção', type: 'protection' as const }],
  },
  {
    id: '2',
    name: 'Produto 2',
    description: 'Descrição do produto 2',
    price: 149.99,
    image: '/image2.jpg',
    tags: [{ label: 'Rosto', type: 'face' as const }],
  },
];

const renderWithProviders = async () => {
  let component;
  await act(async () => {
    component = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <ProductGrid />
          </CartProvider>
        </ThemeProvider>
      </Provider>
    );
  });
  return component;
};

describe('ProductGrid', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSearchTerm = '';
    mockUseGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    });
  });
  it('true', () => {
    expect(true).toBeTruthy;
  });

  it('Renderizando ProductGrid', async () => {
    await renderWithProviders();
  
    expect(screen.getByText('nossos queridinhos estão aqui')).toBeInTheDocument();
  });

  it('Mostrando produtos', async () => {
    await renderWithProviders();
    
    await waitFor(() => {
      expect(screen.getByText('Produto 1')).toBeInTheDocument();
      expect(screen.getByText('Produto 2')).toBeInTheDocument();
      expect(screen.getByText('Descrição do produto 2')).toBeInTheDocument();
      expect(screen.getByText('R$ 149,99')).toBeInTheDocument();
    });

  });

  it('Deve chamar console.log ao clicar no produto', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);

    await renderWithProviders();

    const productCard = screen.getByText('Produto 1');
    productCard.click();

    expect(consoleSpy).toHaveBeenCalledWith('Produto clicado: 1');

    consoleSpy.mockRestore();
  });

  it('Deve avisar estar vazio', async () => {
    //    mockProductService.getProducts.mockResolvedValue([]);

    mockUseGetProductsQuery.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });
    
    await renderWithProviders();
    
    await waitFor(() => {
      expect(screen.getByText('Nenhum produto disponível no momento.')).toBeInTheDocument();
    });
  });

  it('Adicionar produto quando for clicado', async () => {
    await renderWithProviders();
    
    await waitFor(() => {
      expect(screen.getByText('Produto 1')).toBeInTheDocument();
    });
    
    const buyButtons = screen.getAllByRole('button', { name: /comprar/i });
    fireEvent.click(buyButtons[0]);
    
    // O produto deve ser adicionado ao carrinho via contexto
  });
  
  
  it('Deve filtrar produtos com base no termo de busca', async () => {
    mockSearchTerm = 'PRODUTO 1';
    await renderWithProviders();

    expect(screen.getByText('Produto 1')).toBeInTheDocument();
  });
});

