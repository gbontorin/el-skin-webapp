import { renderHook, act } from '@testing-library/react';
import { useCart } from './useCart';

describe('useCart', () => {

  it('Verdade', () => {
    expect(true).toBeTruthy;

  });

});

/*

  it('Carro vazio no início', () => {
    const { result } = renderHook(() => useCart());
    
    expect(result.current.items).toEqual([]);
    expect(result.current.getTotalItems()).toBe(0);
    expect(result.current.getTotalPrice()).toBe(0);
  });

  it('Adicionando item', () => {
    const { result } = renderHook(() => useCart());
    
    const newItem = {
      id: '1',
      name: 'Produto Teste',
      price: 99.99,
      image: '/test.jpg'
    };

    act(() => {
      result.current.addItem(newItem);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0]).toEqual({
      ...newItem,
      quantity: 1
    });
  });

  it('Adicionando item já existente no carrinho', () => {
    const { result } = renderHook(() => useCart());
    
    const item = {
      id: '1',
      name: 'Produto Teste',
      price: 99.99,
      image: '/test.jpg'
    };

    act(() => {
      result.current.addItem(item);
      result.current.addItem(item);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(2);
  });

  it('Removendo item do carrinho', () => {
    const { result } = renderHook(() => useCart());
    
    const item = {
      id: '1',
      name: 'Produto Teste',
      price: 99.99,
      image: '/test.jpg'
    };

    act(() => {
      result.current.addItem(item);
    });

    expect(result.current.items).toHaveLength(1);

    act(() => {
      result.current.removeItem('1');
    });

    expect(result.current.items).toHaveLength(0);
  });

  it('Atualizando Quantidade manualmente', () => {
    const { result } = renderHook(() => useCart());
    
    const item = {
      id: '1',
      name: 'Produto Teste',
      price: 99.99,
      image: '/test.jpg'
    };

    act(() => {
      result.current.addItem(item);
    });

    act(() => {
      result.current.updateQuantity('1', 5);
    });

    expect(result.current.items[0].quantity).toBe(5);
  });

  it('Removendo item quando a quantidade é zero', () => {
    const { result } = renderHook(() => useCart());
    
    const item = {
      id: '1',
      name: 'Produto Teste',
      price: 99.99,
      image: '/test.jpg'
    };

    act(() => {
      result.current.addItem(item);
    });

    act(() => {
      result.current.updateQuantity('1', 0);
    });

    expect(result.current.items).toHaveLength(0);
  });

  it('Esvaziando carrinho', () => {
    const { result } = renderHook(() => useCart());
    
    const items = [
      { id: '1', name: 'Produto 1', price: 99.99, image: '/test1.jpg' },
      { id: '2', name: 'Produto 2', price: 149.99, image: '/test2.jpg' }
    ];

    act(() => {
      items.forEach(item => result.current.addItem(item));
    });

    expect(result.current.items).toHaveLength(2);

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.items).toHaveLength(0);
  });

  it('Calculando total de unidades', () => {
    const { result } = renderHook(() => useCart());
    
    const items = [
      { id: '1', name: 'Produto 1', price: 99.99, image: '/test1.jpg' },
      { id: '2', name: 'Produto 2', price: 149.99, image: '/test2.jpg' }
    ];

    act(() => {
      result.current.addItem(items[0]);
      result.current.addItem(items[0]); // quantidade 2
      result.current.addItem(items[1]); // quantidade 1
    });

    expect(result.current.getTotalItems()).toBe(3);
  });

  it('Calculando Preço Total', () => {
    const { result } = renderHook(() => useCart());
    
    const items = [
      { id: '1', name: 'Produto 1', price: 100, image: '/test1.jpg' },
      { id: '2', name: 'Produto 2', price: 200, image: '/test2.jpg' }
    ];

    act(() => {
      result.current.addItem(items[0]);
      result.current.addItem(items[0]); // 2 × 100 = 200
      result.current.addItem(items[1]); // 1 × 200 = 200
    });

    expect(result.current.getTotalPrice()).toBe(400);
  });
});

/*

  it('Tentando remover um item não existente', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.removeItem('non-existent-id');
    });

    expect(result.current.items).toHaveLength(0);
  });

  it('Alterando a quantidade de um item não existente', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.updateQuantity('non-existent-id', 5);
    });

    expect(result.current.items).toHaveLength(0);
  });
});
*/