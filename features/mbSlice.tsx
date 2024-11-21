import { BannerDetailed } from '@/models/banner-detailed';
import { Seller } from '@/models/seller';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface MBData {
  list: BannerDetailed[];
  sellerInfo: Seller;
  id: string;
}

export interface MBState {
  mbListData: MBData[];
}

const initialState: MBState = {
  mbListData: [],
};

export const mbSlice = createSlice({
  name: 'mb',
  initialState,
  reducers: {
    setMbListData: (state, action: PayloadAction<MBData[]>) => {
      state.mbListData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMbListData } = mbSlice.actions;

export default mbSlice.reducer;
