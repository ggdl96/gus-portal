import { BannerDetailed } from '@/models/banner-detailed';
import { BannerMedium } from '@/models/banner-medium/indext';
import { BannerSmall } from '@/models/banner-small';
import { BannerTop } from '@/models/banner-top';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
  topBannersWithSeller: BannerTop[];
  topBannersWithoutSeller: BannerTop[];
  mediumBannersData: BannerMedium[];
  smallBannersData: BannerSmall[];
  detailedBannersData: BannerDetailed[];
}

const initialState: HomeState = {
  topBannersWithSeller: [],
  topBannersWithoutSeller: [],
  mediumBannersData: [],
  smallBannersData: [],
  detailedBannersData: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTopBannersWithSeller: (state, action: PayloadAction<BannerTop[]>) => {
      state.topBannersWithSeller = action.payload;
    },
    setTopBannersWithoutSeller: (state, action: PayloadAction<BannerTop[]>) => {
      state.topBannersWithoutSeller = action.payload;
    },
    setMediumBannersData: (state, action: PayloadAction<BannerMedium[]>) => {
      state.mediumBannersData = action.payload;
    },
    setSmallBannersData: (state, action: PayloadAction<BannerSmall[]>) => {
      state.smallBannersData = action.payload;
    },
    setDetailedBannersData: (state, action: PayloadAction<BannerDetailed[]>) => {
      state.detailedBannersData = action.payload;
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
