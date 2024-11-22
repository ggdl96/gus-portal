import { BannerDetailed } from '@/models/banner-detailed';
import { Seller } from '@/models/seller';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HMBSState {
  hmbsListData: BannerDetailed[];
  sellerInfo?: Seller;
}

const initialState: HMBSState = {
  hmbsListData: [],
  sellerInfo: undefined,
};

export const hmbsSlice = createSlice({
  name: 'hmbs',
  initialState,
  reducers: {
    // rename
    setHmbsListData: (state, action: PayloadAction<BannerDetailed[]>) => {
      state.hmbsListData = action.payload;
    },
    setSellerInfo: (state, action: PayloadAction<Seller>) => {
      state.sellerInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHmbsListData, setSellerInfo } = hmbsSlice.actions;

export default hmbsSlice.reducer;
