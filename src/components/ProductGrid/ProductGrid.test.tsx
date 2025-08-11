import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import ProductGrid from './ProductGrid';
import { CartProvider } from '../../context/CartContext';
import { productService } from '../../services';
import { theme } from '../../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../../store';

// Mock dos serviços
jest.mock('../../services', () => ({
  productService: {
    getProducts: jest.fn(),
  },
}));

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
    tags: [{ label: 'Proteção', type: 'protection' as const }]
  },
  {
    id: '2',
    name: 'Produto 2',
    description: 'Descrição do produto 2',
    price: 149.99,
    image: '/image2.jpg',
    tags: [{ label: 'Rosto', type: 'face' as const }]
  }
];

const mockProductService = productService as jest.Mocked<typeof productService>;

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
    mockProductService.getProducts.mockResolvedValue(mockProducts);
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

    expect(mockProductService.getProducts).toHaveBeenCalledTimes(1);
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
    mockProductService.getProducts.mockResolvedValue([]);
    
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
  it('Erro gracioso', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
    mockProductService.getProducts.mockRejectedValue(new Error('API Error'));
    
    await renderWithProviders();
    
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Erro ao carregar produtos:', expect.any(Error));
    });
    
    consoleSpy.mockRestore();
  });

  it('Deve filtrar produtos com base no termo de busca', async () => {
    mockSearchTerm = 'PRODUTO 1';
    await renderWithProviders();

    expect(screen.getByText('Produto 1')).toBeInTheDocument();
  });
});
