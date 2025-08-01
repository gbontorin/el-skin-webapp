import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from './About';

test('Testando About', () => {
  //Arrange
  render(<About />);

  //Act

  //Assert
  expect(screen.getByText('Sobre a AL SKIN')).toBeInTheDocument();
  expect(screen.getByText('QUEM SOMOS')).toBeInTheDocument();
  expect(true).toBeTruthy;
});