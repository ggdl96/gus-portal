import { BannerDetailed } from '@/models/banner-detailed';
import { Seller } from '@/models/seller';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SellerState {
  sellerInfo?: Seller;
  detailedBannerList: BannerDetailed[];
}

const initialState: SellerState = {
  sellerInfo: undefined,
  detailedBannerList: [],
};

export const sellerSlice = createSlice({
  name: 'seller',
  initialState,
  reducers: {
    setSeller: (
      state,
      action: PayloadAction<{ seller: Seller; detailedBannerList: BannerDetailed[] }>,
    ) => {
      state.sellerInfo = action.payload.seller;
      state.detailedBannerList = action.payload.detailedBannerList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSeller } = sellerSlice.actions;

export default sellerSlice.reducer;
