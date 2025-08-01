import './ProductGrid.css';

import ProductCard from '../ProductCard/ProductCard';
import { productService, IProduct } from '../../services';
import React, { useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';

function ProductGrid() {
  const title = 'nossos queridinhos estão aqui';
  //const products = defaultProducts;

  const [products, setProducts] = React.useState<IProduct[]>([]);
  const { addItem } = useCartContext();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productService.getProducts();
        setProducts(products);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    fetchProducts();
  }, []);


  const handleProductClick = (productId: string) => {
    console.log(`Produto clicado: ${productId}`);
  };

  const handleBuyClick = (productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Comprar produto: ${productId}`);
    const product = products.find(p => p.id === productId);
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      console.log(`Produto adicionado ao carrinho: ${productId}`);
    }
  };

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <h2 className="product-grid-title">{title}</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
              onBuyClick={handleBuyClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;





/*import Prod1 from '../../assets/prod1.jpg';
import Prod2 from '../../assets/prod2.jpg';
import Prod3 from '../../assets/prod3.jpg';
import Prod4 from '../../assets/prod4.jpg';
import Prod5 from '../../assets/prod5.jpg';
import Prod6 from '../../assets/prod6.jpg';
import Prod7 from '../../assets/prod7.jpg';
import Prod8 from '../../assets/prod8.jpg';
*/



/*
const defaultProducts: IProduct[] = [
  {
    id: '1',
    name: 'Protetor solar AL SUN',
    description: 'alta proteção e pele luminosa sem grude nem pelo encarnado',
    price: 79.9,
    image: Prod1,
    tags: [
      { label: 'proteção', type: 'protection' },
      { label: 'rosto', type: 'face' },
    ],
  },
  {
    id: '2',
    name: 'Protetor solar AL SUN',
    description: 'alta proteção e pele luminosa sem grude nem pelo encarnado',
    price: 79.9,
    image: Prod2,
    tags: [
      { label: 'proteção', type: 'protection' },
      { label: 'rosto', type: 'face' },
    ],
  },
  {
    id: '3',
    name: 'Protetor solar AL SUN',
    description: 'alta proteção e pele luminosa sem grude nem pelo encarnado',
    price: 79.9,
    image: Prod3,
    tags: [
      { label: 'proteção', type: 'protection' },
      { label: 'rosto', type: 'face' },
    ],
  },
  {
    id: '4',
    name: 'Protetor solar AL SUN',
    description: 'alta proteção e pele luminosa sem grude nem pelo encarnado',
    price: 79.9,
    image: Prod4,
    tags: [
      { label: 'proteção', type: 'protection' },
      { label: 'rosto', type: 'face' },
    ],
  },
  {
    id: '5',
    name: 'Protetor solar AL SUN',
    description: 'alta proteção e pele luminosa sem grude nem pelo encarnado',
    price: 79.9,
    image: Prod5,
    tags: [
      { label: 'proteção', type: 'protection' },
      { label: 'rosto', type: 'face' },
    ],
  },
  {
    id: '6',
    name: 'Protetor solar AL SUN',
    description: 'alta proteção e pele luminosa sem grude nem pelo encarnado',
    price: 79.9,
    image: Prod8,
    tags: [
      { label: 'proteção', type: 'protection' },
      { label: 'rosto', type: 'face' },
    ],
  },
  {
    id: '7',
    name: 'Protetor solar AL SUN',
    description: 'alta proteção e pele luminosa sem grude nem pelo encarnado',
    price: 79.9,
    image: Prod6,
    tags: [
      { label: 'proteção', type: 'protection' },
      { label: 'rosto', type: 'face' },
    ],
  },
  {
    id: '8',
    name: 'Protetor solar AL SUN',
    description: 'alta proteção e pele luminosa sem grude nem pelo encarnado',
    price: 79.9,
    image: Prod7,
    tags: [
      { label: 'proteção', type: 'protection' },
      { label: 'rosto', type: 'face' },
    ],
  },
];

*/
