import { render, screen } from '@testing-library/react';
import CartModal from './CartModal';

describe('CartModal', () => {

  // Dados mockados para simular um carrinho com itens
  const mockItems = [
    { id: '1', name: 'Hydrating Serum', price: 10.50, quantity: 2, image: 'serum.png' },
    { id: '2', name: 'Moisturizer', price: 15.00, quantity: 1, image: 'moisturizer.png' },
  ];

  // Funções mock para simular os callbacks
  const mockOnClose = jest.fn();
  const mockOnUpdateQuantity = jest.fn();
  const mockOnRemoveItem = jest.fn();
  const mockOnFinalizePurchase = jest.fn();

  // Função auxiliar para renderizar o componente com props padrão
  const renderCartModal = (props = {}) => {
    const defaultProps = {
      isOpen: true,
      onClose: mockOnClose,
      items: [],
      onUpdateQuantity: mockOnUpdateQuantity,
      onRemoveItem: mockOnRemoveItem,
      onFinalizePurchase: mockOnFinalizePurchase,
    };
    return render(<CartModal {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    // Limpa os mocks antes de cada teste para evitar interferência
    jest.clearAllMocks();
  });

  it('Deste sempre verdadeiro', () => {
    expect(true).toBeTruthy;
  });

  it('não deve ser renderizado quando `isOpen` é falso', () => {
    const { container } = renderCartModal({ isOpen: false });
    // O componente não retorna nada se `!isOpen`, então o container estará vazio.
    expect(container.firstChild).toBeNull();
  });
 
  it('deve renderizar o título do modal quando está aberto', () => {
    renderCartModal();
    const title = screen.getByRole('heading', { name: /carrinho/i });
    expect(title).toBeInTheDocument();
  });
 
  it('deve exibir a mensagem de carrinho vazio quando não há itens', () => {
    renderCartModal();
    const emptyMessage = screen.getByText('Seu carrinho está vazio');
    expect(emptyMessage).toBeInTheDocument();
  });

  it('deve renderizar os itens do carrinho quando eles existem', () => {
    renderCartModal({ items: mockItems });
    expect(screen.getByText('Hydrating Serum')).toBeInTheDocument();
    expect(screen.getByText('Moisturizer')).toBeInTheDocument();
  });

  it('deve mostrar a quantidade e o subtotal para cada item', () => {
    renderCartModal({ items: mockItems });
    // Verifica o primeiro item
    expect(screen.getByText('2')).toBeInTheDocument(); // Quantidade
    expect(screen.getByText('R$ 21,00')).toBeInTheDocument(); // 10.50 * 2
    // Verifica o segundo item
    expect(screen.getByText('1')).toBeInTheDocument(); // Quantidade
    expect(screen.getByText('R$ 15,00')).toBeInTheDocument(); // 15.00 * 1
  });
  
  it('deve calcular e exibir o total corretamente', () => {
    renderCartModal({ items: mockItems });
    // Total = (10.50 * 2) + (15.00 * 1) = 21.00 + 15.00 = 36.00
    expect(screen.getByText('R$ 36,00')).toBeInTheDocument();
  });

  it('deve mostrar a quantidade e o subtotal para cada item', () => {
    renderCartModal({ items: mockItems });
    // Verifica o primeiro item
    expect(screen.getByText('2')).toBeInTheDocument(); // Quantidade
    expect(screen.getByText('R$ 21,00')).toBeInTheDocument(); // 10.50 * 2
    // Verifica o segundo item
    expect(screen.getByText('1')).toBeInTheDocument(); // Quantidade
    expect(screen.getByText('R$ 15,00')).toBeInTheDocument(); // 15.00 * 1
  });
  
  it('deve calcular e exibir o total corretamente', () => {
    renderCartModal({ items: mockItems });
    // Total = (10.50 * 2) + (15.00 * 1) = 21.00 + 15.00 = 36.00
    expect(screen.getByText('R$ 36,00')).toBeInTheDocument();
  });
});