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
  isLoading: boolean;
}

const listInitialValue = [
  {
    isLoading: true,
    displaySeller: true,
    seller: {
      id: 'seller1',
      name: '',
      image: '',
    },
    id: 'product1',
    image: '',
    title: '',
    price: 0,
    currencyDisplay: '',
    currencyCode: '',
    description: '',
    variants: [],
  },
  {
    isLoading: true,
    displaySeller: true,
    seller: {
      id: 'seller1',
      name: '',
      image: '',
    },
    id: 'product2',
    image: '',
    title: '',
    price: 0,
    currencyDisplay: '',
    currencyCode: '',
    description: '',
    variants: [],
  },
  {
    isLoading: true,
    displaySeller: true,
    seller: {
      id: 'seller3',
      name: '',
      image: '',
    },
    id: 'product3',
    image: '',
    title: '',
    price: 0,
    currencyDisplay: '',
    currencyCode: '',
    description: '',
    variants: [],
  },
  {
    isLoading: true,
    displaySeller: true,
    seller: {
      id: 'seller1',
      name: '',
      image: '',
    },
    id: 'product4',
    image: '',
    title: '',
    price: 0,
    currencyDisplay: '',
    currencyCode: '',
    description: '',
    variants: [],
  },
];
const initialState: SearchState = {
  isLoading: true,
  searchValue: '',
  list: listInitialValue,
  page: 1,
  pageCount: 3,
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
      state.isLoading = false;
    },
    resetResults: (state) => {
      state.list = [];
      state.page = 1;
      state.pageCount = 3;
      state.count = 0;
      state.searchValue = '';
      state.isLoading = true;
    },
    startLoading: (state) => {
      state.isLoading = true;
      state.list = [...listInitialValue];
    },
  },
});

// Action creators are generated for each case reducer function
export const { search, setResults, resetResults, startLoading } = searchSlice.actions;

export default searchSlice.reducer;

// TODO SEE IF CAN BE EXTRACTED
export const selectSearchList = (state: RootState) => {
  return state.search;
};
