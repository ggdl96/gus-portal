import { BannerDetailed } from '@/models/banner-detailed';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SBState {
  sbListData: BannerDetailedComponent[];
}

const initialState: SBState = {
  sbListData: [
    {
      isLoading: true,
      displaySeller: true,
      seller: {
        id: 'seller1',
        name: '',
        image: '',
      },
      id: 'p1',
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
      id: 'p2',
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
      id: 'p3',
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
      id: 'p4',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
    },
  ],
};

export const sbSlice = createSlice({
  name: 'sb',
  initialState,
  reducers: {
    setSbListData: (state, action: PayloadAction<BannerDetailed[]>) => {
      state.sbListData = action.payload.map((item) => ({
        ...item,
        isLoading: false,
        displaySeller: true,
      }));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSbListData } = sbSlice.actions;

export default sbSlice.reducer;
