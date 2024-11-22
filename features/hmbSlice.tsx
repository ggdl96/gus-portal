import { BannerDetailed } from '@/models/banner-detailed';
import { Seller } from '@/models/seller';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface HBMData {
  list: BannerDetailed[];
  sellerInfo: Seller;
  id: string;
}

export interface HMBState {
  hmbListData: HBMData[];
}

const initialState: HMBState = {
  hmbListData: [],
};

export const hmbSlice = createSlice({
  name: 'hmb',
  initialState,
  reducers: {
    setHbmListData: (state, action: PayloadAction<HBMData[]>) => {
      state.hmbListData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHbmListData } = hmbSlice.actions;

export default hmbSlice.reducer;
