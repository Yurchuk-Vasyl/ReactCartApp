import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChooseItem } from './types';

const initialState: ChooseItem = {};

const chooseItemSlice = createSlice({
  name: 'chooseItem',
  initialState,
  reducers: {
    setChooseItem(_, action: PayloadAction<ChooseItem>) {
      return action.payload;
    },
  },
});

export const { setChooseItem } = chooseItemSlice.actions;

export default chooseItemSlice.reducer;
