import React from 'react';
//import './ProductCard.css';

//import { IProduct } from '../../services';

import { IProduct } from '../../store/slices/productsSlice';
import styled from 'styled-components';

interface ProductCardProps {
  product: IProduct;
  onProductClick: (productId: string) => void;
  onBuyClick: (productId: string, event: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
  onBuyClick,
}) => {
  const formatPrice = (price: number): string => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <ProductCardStyled
      data-testid="product-card"
      onClick={() => onProductClick(product.id)}>

      <ProductImage>
        <img src={product.image} alt={product.name} />
      </ProductImage>

      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>

        <ProductTags>
          {/*
          {product.tags.map((tag) => (
            <span
              key={`${product.id}-${tag.label}-${tag.type}`}
              className={`product-tag product-tag--${tag.type}`}
            >
              {tag.label}
            </span>
          ))}
            */}
        </ProductTags>

        <ProductFooter>
          <ProductPrice className="product-price">
            {formatPrice(product.price)}
          </ProductPrice>
          <ProductBuyButton 
            data-testid="product-buy-button"
            className="product-buy-button"
            onClick={(e) => onBuyClick(product.id, e)}
            type="button"
          >
            comprar
          </ProductBuyButton>
        </ProductFooter>
      </ProductInfo>
    </ProductCardStyled>
  );
};

export default ProductCard;

const ProductCardStyled = styled.a`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  border: 1px solid #f0f0f0;
  padding: 0;
  text-align: left;
  font-family: inherit;
&:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
&:focus {
  outline: 2px solid #8B4A8B;
  outline-offset: 2px;
}`;


const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #C8B99C;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  `;

const ProductInfo = styled.div`
  padding: 20px;
`;


const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;


const ProductTags =styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};

`;

const ProductBuyButton = styled.button`
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: ${({ theme }) => theme.colors.text.white};
  border: none;
  padding: 10px ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  text-transform: lowercase;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryGradientHover};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  `;
