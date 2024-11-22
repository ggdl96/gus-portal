import { BannerDetailed } from '@/models/banner-detailed';
import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchValue: string;
  list: BannerDetailed[];
  page: number;
  pageCount: number;
  count: number;
}

const initialState: SearchState = {
  searchValue: '',
  list: [],
  page: 1,
  pageCount: 6,
  count: 0,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setResults: (
      state,
      action: PayloadAction<{ results: BannerDetailed[]; pageCount: number; count: number }>,
    ) => {
      state.list = action.payload.results;
      state.page = 1;
      state.pageCount = action.payload.pageCount;
      state.count = action.payload.count;
    },
  },
});

// Action creators are generated for each case reducer function
export const { search, setResults } = searchSlice.actions;

export default searchSlice.reducer;

// TODO SEE IF CAN BE EXTRACTED
export const selectSearchList = (state: RootState) => {
  return state.search;
};
