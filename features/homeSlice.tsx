import { BannerDetailed } from '@/models/banner-detailed';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import { BannerMediumComponent } from '@/models/banner-medium-component/indext';
import { BannerMedium } from '@/models/banner-medium/indext';
import { BannerSmall } from '@/models/banner-small';
import { BannerSmallComponent } from '@/models/banner-small-component';
import { BannerTop } from '@/models/banner-top';
import { BannerTopComponent } from '@/models/banner-top-component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
  topBannersWithSeller: BannerTopComponent[];
  topBannersWithoutSeller: BannerTopComponent[];
  mediumBannersData: BannerMediumComponent[];
  smallBannersData: BannerSmallComponent[];
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
  mediumBannersData: [
    {
      isLoading: true,
      image: '',
      categories: [],
      text: '',
      id: 'medium-skeleton-1',
    },
    {
      isLoading: true,
      image: '',
      categories: [],
      text: '',
      id: 'medium-skeleton-2',
    },
    {
      isLoading: true,
      image: '',
      categories: [],
      text: '',
      id: 'medium-skeleton-3',
    },
    {
      isLoading: true,
      image: '',
      categories: [],
      text: '',
      id: 'medium-skeleton-4',
    },
  ],
  smallBannersData: [
    {
      isLoading: true,
      id: 'small-1',
      title: '',
      urlImage: '',
      views: 0,
    },
    {
      isLoading: true,
      id: 'small-2',
      title: '',
      urlImage: '',
      views: 0,
    },
    {
      isLoading: true,
      id: 'small-3',
      title: '',
      urlImage: '',
      views: 0,
    },
  ],
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
      state.mediumBannersData = action.payload.map((item) => ({
        ...item,
        isLoading: false,
      }));
    },
    setSmallBannersData: (state, action: PayloadAction<BannerSmall[]>) => {
      state.smallBannersData = action.payload.map((item) => ({
        ...item,
        isLoading: false,
      }));
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
