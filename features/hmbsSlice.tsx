import { BannerDetailed } from '@/models/banner-detailed';
import { Seller } from '@/models/seller';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HMBSState {
  hbmsListData: BannerDetailed[];
  sellerInfo?: Seller;
}

const initialState: HMBSState = {
  hbmsListData: [],
  sellerInfo: undefined,
};

export const hmbsSlice = createSlice({
  name: 'hmbs',
  initialState,
  reducers: {
    setHbmsListData: (state, action: PayloadAction<BannerDetailed[]>) => {
      state.hbmsListData = action.payload;
    },
    setSellerInfo: (state, action: PayloadAction<Seller>) => {
      state.sellerInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHbmsListData, setSellerInfo } = hmbsSlice.actions;

export default hmbsSlice.reducer;
