import { BannerDetailed } from '@/models/banner-detailed';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchValue: string;
  list: BannerDetailedComponent[];
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
      action: PayloadAction<{
        results: BannerDetailed[];
        pageCount: number;
        count: number;
        searchValue: string;
      }>,
    ) => {
      state.list = action.payload.results.map((item) => ({
        ...item,
        isLoading: false,
        displaySeller: true,
      }));
      state.page = 1;
      state.pageCount = action.payload.pageCount;
      state.count = action.payload.count;
      state.searchValue = action.payload.searchValue;
    },
    resetResults: (state) => {
      state.list = [];
      state.page = 1;
      state.pageCount = 6;
      state.count = 0;
      state.searchValue = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { search, setResults, resetResults } = searchSlice.actions;

export default searchSlice.reducer;

// TODO SEE IF CAN BE EXTRACTED
export const selectSearchList = (state: RootState) => {
  return state.search;
};
