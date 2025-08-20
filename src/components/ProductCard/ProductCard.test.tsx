import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { IProduct } from '../../services';

const mockProduct: IProduct = {
  id: '1',
  name: 'Teste Produto',
  description: 'Descrição do produto teste',
  price: 99.99,
  image: '/test-image.jpg',
  tags: [
    { label: 'Proteção Solar', type: 'protection' },
    { label: 'Rosto', type: 'face' }
  ]
};

const mockProps = {
  product: mockProduct,
  onProductClick: jest.fn(),
  onBuyClick: jest.fn(),
};


describe('Testando Contexto do Carrinho', () => {
  
  it('Verdade', () => {
    expect(true).toBeTruthy;

  });

});

test('Testando Renderizar Product Card', () => {
  //Arrange

  //Act
  render(<ProductCard {...mockProps} />);
  //Assert 
  expect(screen.getByText('Teste Produto')).toBeInTheDocument();
  expect(screen.getByText('Descrição do produto teste')).toBeInTheDocument();
  expect(screen.getByText('R$ 99,99')).toBeInTheDocument();
  
});
