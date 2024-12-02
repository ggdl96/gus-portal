import { BannerDetailed } from '@/models/banner-detailed';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import { SellerDetail } from '@/models/seller-detail';
import { SellerDetailComponent } from '@/models/seller-detail-component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SellerState {
  sellerInfo: SellerDetailComponent;
  detailedBannerList: BannerDetailedComponent[];
}

const initialState: SellerState = {
  sellerInfo: {
    isLoading: true,
    id: 'seller1',
    name: '',
    image: '',
    description: '',
    reputation: '',
    sales: {
      lastMonth: 0,
    },
    location: '',
  },
  detailedBannerList: [
    {
      isLoading: true,
      displaySeller: false,
      seller: {
        id: 'seller1',
        name: '',
        image: '',
      },
      id: 'p1',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
    },
    {
      isLoading: true,
      displaySeller: false,
      seller: {
        id: 'seller1',
        name: '',
        image: '',
      },
      id: 'p2',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
    },
    {
      isLoading: true,
      displaySeller: false,
      seller: {
        id: 'seller1',
        name: '',
        image: '',
      },
      id: 'p3',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
    },
    {
      isLoading: true,
      displaySeller: false,
      seller: {
        id: 'seller1',
        name: '',
        image: '',
      },
      id: 'p4',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
    },
  ],
};

export const sellerSlice = createSlice({
  name: 'seller',
  initialState,
  reducers: {
    setSeller: (
      state,
      action: PayloadAction<{ seller: SellerDetail; detailedBannerList: BannerDetailed[] }>,
    ) => {
      state.sellerInfo = { ...action.payload.seller, isLoading: false };
      state.detailedBannerList = action.payload.detailedBannerList.map((item) => ({
        ...item,
        isLoading: false,
        displaySeller: false,
      }));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSeller } = sellerSlice.actions;

export default sellerSlice.reducer;
