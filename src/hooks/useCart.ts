import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import type { RootState, AppDispatch } from '../store';
import { addItem, removeItem, updateQuantity, clearCart, ICartItem } from '../store/slices/cartSlice';

/*
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
*/

export interface UseCartReturn {
  items: ICartItem[];
  addItem: (item: Omit<ICartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = (): UseCartReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleAddItem = useCallback((item: Omit<ICartItem, 'quantity'>) => {
    dispatch(addItem(item));
  }, [dispatch]);

  const handleRemoveItem = useCallback((id: string) => {
    dispatch(removeItem(id));
  }, [dispatch]);

  const handleUpdateQuantity = useCallback((id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  }, [dispatch]);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const getTotalItems = useCallback(() => {
    return items.reduce((total:number, item:ICartItem) => total + item.quantity, 0);
  }, [items]);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total:number, item:ICartItem) => total + (item.price * item.quantity), 0);
  }, [items]);

  return {
    items,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    updateQuantity: handleUpdateQuantity,
    clearCart: handleClearCart,
    getTotalItems,
    getTotalPrice
  };
};