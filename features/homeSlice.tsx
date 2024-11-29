import { BannerDetailed } from '@/models/banner-detailed';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import { BannerMedium } from '@/models/banner-medium/indext';
import { BannerSmall } from '@/models/banner-small';
import { BannerTop } from '@/models/banner-top';
import { BannerTopComponent } from '@/models/banner-top-component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
  topBannersWithSeller: BannerTopComponent[];
  topBannersWithoutSeller: BannerTopComponent[];
  mediumBannersData: BannerMedium[];
  smallBannersData: BannerSmall[];
  detailedBannersData: BannerDetailedComponent[];
}

const initialState: HomeState = {
  topBannersWithSeller: [
    {
      id: '1',
      isLoading: true,
      title: '',
      subTitle: '',
      isOwned: false,
      image: '',
      seller: {
        id: '',
        name: '',
        image: '',
      },
      type: 'content' as const,
    },
    {
      id: '2',
      isLoading: true,
      title: '',
      subTitle: '',
      isOwned: false,
      image: '',
      seller: {
        id: '',
        name: '',
        image: '',
      },
      type: 'content' as const,
    },
  ],
  topBannersWithoutSeller: [
    {
      id: '1',
      isLoading: true,
      title: '',
      subTitle: '',
      isOwned: false,
      image: '',
      seller: {
        id: '',
        name: '',
        image: '',
      },
      type: 'product' as const,
    },
    {
      id: '2',
      isLoading: true,
      title: '',
      subTitle: '',
      isOwned: false,
      image: '',
      seller: {
        id: '',
        name: '',
        image: '',
      },
      type: 'product' as const,
    },
  ],
  mediumBannersData: [],
  smallBannersData: [],
  detailedBannersData: [
    {
      seller: {
        id: '',
        name: '',
        image: '',
      },
      id: 'id1',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
      isLoading: true,
      displaySeller: true,
    },
    {
      seller: {
        id: '',
        name: '',
        image: '',
      },
      id: 'id2',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
      isLoading: true,
      displaySeller: true,
    },
    {
      seller: {
        id: '',
        name: '',
        image: '',
      },
      id: 'id3',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
      isLoading: true,
      displaySeller: true,
    },
  ],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTopBannersWithSeller: (state, action: PayloadAction<BannerTop[]>) => {
      state.topBannersWithSeller = action.payload.map((item) => ({ ...item, isLoading: false }));
    },
    setTopBannersWithoutSeller: (state, action: PayloadAction<BannerTop[]>) => {
      state.topBannersWithoutSeller = action.payload.map((item) => ({ ...item, isLoading: false }));
    },
    setMediumBannersData: (state, action: PayloadAction<BannerMedium[]>) => {
      state.mediumBannersData = action.payload;
    },
    setSmallBannersData: (state, action: PayloadAction<BannerSmall[]>) => {
      state.smallBannersData = action.payload;
    },
    setDetailedBannersData: (state, action: PayloadAction<BannerDetailed[]>) => {
      state.detailedBannersData = action.payload.map((item) => ({
        ...item,
        isLoading: false,
        displaySeller: true,
      }));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTopBannersWithSeller,
  setTopBannersWithoutSeller,
  setMediumBannersData,
  setSmallBannersData,
  setDetailedBannersData,
} = homeSlice.actions;

export default homeSlice.reducer;
