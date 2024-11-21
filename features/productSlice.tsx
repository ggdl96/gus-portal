import { BannerDetailed } from '@/models/banner-detailed';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductSlice {
  data?: BannerDetailed;
}

const initialState: ProductSlice = {
  data: undefined,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<BannerDetailed>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
