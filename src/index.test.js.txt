/* eslint-disable no-undef */
import '@testing-library/jest-dom';

// Crie um mock da função reportWebVitals
const mockReportWebVitals = jest.fn();

// Mock do módulo reportWebVitals
// Isso substitui a importação real pela nossa função mockada
jest.mock('./reportWebVitals', () => ({
  __esModule: true,
  default: mockReportWebVitals,
}));

// Mock do ReactDOM para evitar a renderização real no DOM
jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

// Crie um elemento div com o id 'root' para o teste
const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

// O teste em si
describe('index.tsx', () => {
  it('deve chamar a função reportWebVitals', () => {
    // Importe o arquivo principal do seu aplicativo.
    // A importação aciona o código do arquivo.
    require('./index');

    // Verifique se o mock da função reportWebVitals foi chamado
    expect(mockReportWebVitals).toHaveBeenCalled();
  });
});