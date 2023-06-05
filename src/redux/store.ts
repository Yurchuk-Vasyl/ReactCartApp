import { configureStore } from '@reduxjs/toolkit';
import clothes from './slices/clothes/clothesSlice';
import filter from './slices/filter/filterSlice';
import chooseItem from './slices/chooseItem/chooseItemSlice';
import cartItems from './slices/cartItems/cartItemsSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { clothes, filter, chooseItem, cartItems },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
