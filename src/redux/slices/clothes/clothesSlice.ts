import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import {
  ClothesItem,
  ClothesSliceState,
  FetchPizzaArgs,
  Status,
} from './types';

import { getApiResource } from '../../../utils/network';
import { API_CLOTHES_DATA } from '../../../constants/clothesApi';

export const fetchClothes = createAsyncThunk<ClothesItem[], FetchPizzaArgs>(
  'clothes/fetchClothesStatus',
  async ({ currentPage, category, sortBy, order }) => {
    const data = await getApiResource(
      `${API_CLOTHES_DATA}?page=${currentPage}&limit=3&category=${category}&sortBy=${sortBy}&order=${order}`
    );

    return data;
  }
);

const initialState: ClothesSliceState = {
  clothesItems: [],
  status: Status.LOADING,
};

const clothesSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ClothesItem[]>) {
      state.clothesItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClothes.pending, (state) => {
      state.clothesItems = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchClothes.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.clothesItems = action.payload;
    });
    builder.addCase(fetchClothes.rejected, (state) => {
      state.status = Status.ERROR;
      state.clothesItems = [];
    });
  },
});

export const { setItems } = clothesSlice.actions;

export default clothesSlice.reducer;
