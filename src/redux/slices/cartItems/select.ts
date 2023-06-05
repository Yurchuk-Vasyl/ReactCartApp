import { RootState } from 'src/redux/store';
import { CartItems } from './types';

export const selectCartItems = (state: RootState) => state.cartItems;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cartItems?.items.find((obj) => obj.id === id) as CartItems;
