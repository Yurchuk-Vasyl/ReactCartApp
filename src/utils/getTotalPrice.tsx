import { CartItems } from 'src/redux/slices/cartItems/types';

export const getTotalPrice = (array: CartItems[]) =>
  array.reduce((acc, item) => (acc = acc + item.price * item.count), 0);
