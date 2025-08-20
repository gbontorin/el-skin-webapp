import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Carousel from './Carousel';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { useGetCarouselItemsQuery } from '../../store/api/apiSlice';

// Mocka o módulo inteiro, substituindo a implementação original do hook
// por uma função mock do Jest. Isso deve ser feito antes da importação do componente.
jest.mock('../../store/api/apiSlice', () => ({
  ...jest.requireActual('../../store/api/apiSlice'),
  useGetCarouselItemsQuery: jest.fn(),
}));

// Dados mockados para simular a resposta da API
const mockCarouselItems = [
  {
    id: '1',
    title: 'Título 1',
    subtitle: 'Subtítulo 1',
    description: 'Descrição 1',
    backgroundImage: 'bg1.png',
  },
  {
    id: '2',
    title: 'Título 2',
    subtitle: 'Subtítulo 2',
    description: 'Descrição 2',
    backgroundImage: 'bg2.png',
  },
  {
    id: '3',
    title: 'Título 3',
    subtitle: 'Subtítulo 3',
    description: 'Descrição 3',
    backgroundImage: 'bg3.png',
  },
];

// Função de renderização auxiliar
const renderWithProviders = () => {
  return render(
    <Provider store={store}>
      <Carousel />
    </Provider>
  );
};

describe('Carousel - Componente com Redux', () => {
  // Configura um mock padrão para o hook antes de cada teste.
  // Isso evita repetição de código.
  beforeEach(() => {
    // A cada teste, limpa todos os mocks do Jest
    jest.clearAllMocks();
    // Define um valor de retorno padrão para o hook mockado
    (useGetCarouselItemsQuery as jest.Mock).mockReturnValue({
      data: mockCarouselItems,
      isLoading: false,
      error: null,
    });
  });

  // --- Testes de Carregamento e Estados ---

  it('deve exibir a mensagem de "Carregando..." quando os dados estiverem sendo buscados', () => {
    // Sobrescreve o mock padrão apenas para este teste específico
    (useGetCarouselItemsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    });
    
    renderWithProviders();
    
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('deve renderizar os itens do carrossel após o carregamento dos dados', async () => {
    // Usa o mock padrão definido no `beforeEach`
    renderWithProviders();
    
    const firstTitle = await screen.findByText('Título 1');
    expect(firstTitle).toBeInTheDocument();
    expect(screen.getByText('Subtítulo 1')).toBeInTheDocument();
    expect(screen.getByText('Descrição 1')).toBeInTheDocument();
  });

  it('deve exibir uma mensagem de erro se a busca falhar', () => {
    // Sobrescreve o mock padrão para simular um erro
    (useGetCarouselItemsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: 'Erro ao carregar carousel',
    });
    
    renderWithProviders();
    
    expect(screen.getByText(/Erro ao carregar carousel/i)).toBeInTheDocument();
  });

  it('deve exibir mensagem de "Nenhum item encontrado" se a busca retornar um array vazio', () => {
    (useGetCarouselItemsQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });
    
    renderWithProviders();
    
    expect(screen.getByText(/Nenhum item encontrado/i)).toBeInTheDocument();
  });

  // --- Testes de Interação do Usuário ---

  it('deve avançar para o próximo item ao clicar no botão "Próximo"', async () => {
    renderWithProviders();

    await screen.findByText('Título 1');
    
    const nextButton = screen.getByRole('button', { name: /próximo/i });
    
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(screen.getByText('Título 2')).toBeInTheDocument();
    });
  });

  it('deve voltar para o item anterior ao clicar no botão "Voltar"', async () => {
    renderWithProviders();
    
    const nextButton = screen.getByRole('button', { name: /próximo/i });
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(screen.getByText('Título 2')).toBeInTheDocument();
    });

    const prevButton = screen.getByRole('button', { name: /voltar/i });
    
    fireEvent.click(prevButton);
    
    await waitFor(() => {
      expect(screen.getByText('Título 1')).toBeInTheDocument();
    });
  });
  

  // --- Testes de Ação ---
  
  it('deve chamar a função do botão "comprar agora"', async () => {
    // Espiona o console.log para verificar se a função foi chamada
    const consoleSpy = jest.spyOn(console, 'log');
    
    renderWithProviders();
    
    const comprarAgoraButton = await screen.findByRole('button', { name: /comprar agora/i });
    fireEvent.click(comprarAgoraButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Botão clicado: Comprar Agora!');
    
    consoleSpy.mockRestore();
  });
});