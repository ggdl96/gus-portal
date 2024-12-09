import { BannerDetailed } from '@/models/banner-detailed';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import { Seller } from '@/models/seller';
import { SellerComponent } from '@/models/seller-component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HMBSState {
  hmbsListData: BannerDetailedComponent[];
  sellerInfo: SellerComponent;
}

const initialState: HMBSState = {
  hmbsListData: [
    {
      isLoading: true,
      displaySeller: false,
      seller: {
        id: 'seller1',
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
    },
    {
      isLoading: true,
      displaySeller: false,
      seller: {
        id: 'seller1',
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
    },
    {
      isLoading: true,
      displaySeller: false,
      seller: {
        id: 'seller1',
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
    },
    {
      isLoading: true,
      displaySeller: false,
      seller: {
        id: 'seller1',
        name: '',
        image: '',
      },
      id: 'id4',
      image: '',
      title: '',
      price: 0,
      currencyDisplay: '',
      currencyCode: '',
      description: '',
      variants: [],
    },
  ],
  sellerInfo: {
    id: 'seller1',
    name: '',
    image: '',
    isLoading: true,
  },
};

export const hmbsSlice = createSlice({
  name: 'hmbs',
  initialState,
  reducers: {
    setHmbsListData: (state, action: PayloadAction<BannerDetailed[]>) => {
      state.hmbsListData = action.payload.map((item) => ({
        ...item,
        isLoading: false,
        displaySeller: false,
      }));
    },
    setSellerInfo: (state, action: PayloadAction<Seller>) => {
      state.sellerInfo = { ...action.payload, isLoading: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHmbsListData, setSellerInfo } = hmbsSlice.actions;

export default hmbsSlice.reducer;
