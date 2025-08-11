import { API_CONFIG } from '../config/api';
import api from './api';
import { ICarouselItem } from './carouselService';
import { productService } from './productService';

/*
interface ICarouselItem {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
}
*/

const mockProducts: ICarouselItem[] = [
  {
    title: 'Protetor Solar',
    description: 'Protetor solar facial FPS 60',
    subtitle: '89.99',
    backgroundImage: '/images/protetor.jpg',
    
  },
  {
    title: 'Hidratante Facial',
    description: 'Hidratante facial com ácido hialurônico',
    subtitle: '79.99',
    backgroundImage: '/images/hidratante.jpg',
    
  }
];

jest.mock('./api', () => ({
  get: jest.fn(),
}));

const mockApi = api as jest.Mocked<typeof api>;

it('getProducts', async () => {
  // arrange
  mockApi.get.mockResolvedValue({ data: mockProducts });

  // act
  const result = await productService.getProducts();

  // assert
  expect(mockApi.get).toHaveBeenCalledWith(API_CONFIG.ENDPOINTS.PRODUCTS);
  expect(result).toEqual(mockProducts);
});

it('getProductById', async () => {
  // arrange
  mockApi.get.mockResolvedValue({ data: mockProducts[1] });

  // act
  const result = await productService.getProductById('2');

  // assert
  expect(mockApi.get).toHaveBeenCalledWith(`${API_CONFIG.ENDPOINTS.PRODUCTS}/2`);
  expect(result).toEqual(mockProducts[1]);
});