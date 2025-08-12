import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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

/*

test('Testando Click no Product Card', () => {

  //Act
  render(<ProductCard {...mockProps} />);
  const card = screen.getByTestId('product-card');
  fireEvent.click(card);
  //assert
  expect(mockProps.onProductClick).toHaveBeenCalledWith('1');
  expect(mockProps.onProductClick).toHaveBeenCalledTimes(1);


});

test('Testando Click no Buy Button', () => {

  //Act
  render(<ProductCard {...mockProps} />);
  const card = screen.getByTestId('product-buy-button');
  fireEvent.click(card);
  //assert
  expect(mockProps.onProductClick).toHaveBeenCalledWith('1');
  expect(mockProps.onProductClick).toHaveBeenCalledTimes(1);
});

*/