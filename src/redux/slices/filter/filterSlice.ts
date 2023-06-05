import { createSlice } from '@reduxjs/toolkit';

import { SortTypeEnum, FilterSliceState } from './types';

const initialState: FilterSliceState = {
  currentPage: 1,
  categoryId: '0',
  sortType: {
    name: 'популярності(desc)',
    sortProperty: SortTypeEnum.PRICE_ASC,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
