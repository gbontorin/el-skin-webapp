import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('Testando NotFound', () => {
  //Arrange
  render(< NotFound />);

  //Act

  //Assert
  expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
  expect(screen.getByText('Desculpe, a página que você está procurando não existe.')).toBeInTheDocument();
  expect(true).toBeTruthy;
});