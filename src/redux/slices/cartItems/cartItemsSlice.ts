import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CartItems } from './types';
import { getTotalPrice } from 'src/utils/getTotalPrice';
import { getLocalStorage } from 'src/utils/getLocalStorage';
import { clothesLocalStorage } from './../../../constants/clothesLocalStorage';

const initialState: { items: CartItems[]; totalPrice: number } = {
  items: getLocalStorage(clothesLocalStorage),
  totalPrice: getTotalPrice(getLocalStorage(clothesLocalStorage)),
};

const cartItems = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = 0;
    },
    addItems(state, action: PayloadAction<CartItems>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count = action.payload.count;
      } else {
        state.items.push({ ...action.payload });
      }
      state.totalPrice = getTotalPrice(state.items);
    },
  },
});

export const { addItems, removeItems } = cartItems.actions;

export default cartItems.reducer;
