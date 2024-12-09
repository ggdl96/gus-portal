import { BannerDetailed } from '@/models/banner-detailed';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductSlice {
  data: BannerDetailedComponent;
}

const initialState: ProductSlice = {
  data: {
    isLoading: true,
    displaySeller: true,
    seller: {
      id: '',
      name: '',
      image: '',
    },
    id: '',
    image: '',
    title: '',
    price: 0,
    currencyDisplay: '',
    currencyCode: '',
    description: '',
    variants: [],
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<BannerDetailed>) => {
      state.data = { ...action.payload, isLoading: false, displaySeller: true };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
