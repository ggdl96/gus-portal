import { BannerDetailed } from '@/models/banner-detailed';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import { Seller } from '@/models/seller';
import { SellerComponent } from '@/models/seller-component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface MBData {
  list: BannerDetailedComponent[];
  sellerInfo: SellerComponent;
  id: string;
}

export interface MBState {
  mbListData: MBData[];
}

const initialState: MBState = {
  mbListData: [
    {
      sellerInfo: {
        isLoading: true,
        id: 's1',
        name: '',
        image: '',
      },
      list: [
        {
          isLoading: true,
          displaySeller: false,
          seller: {
            id: 's1',
            name: '',
            image: '',
          },
          id: 'pr1',
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
            id: 's1',
            name: '',
            image: '',
          },
          id: 'pr2',
          image: '',
          title: '',
          price: 0,
          currencyDisplay: '',
          currencyCode: '',
          description: '',
          variants: [],
        },
      ],
      id: 'id1',
    },
    {
      sellerInfo: {
        isLoading: true,
        id: 's1',
        name: '',
        image: '',
      },
      list: [
        {
          isLoading: true,
          displaySeller: false,
          seller: {
            id: 's1',
            name: '',
            image: '',
          },
          id: 'pr3',
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
            id: 's1',
            name: '',
            image: '',
          },
          id: 'pr4',
          image: '',
          title: '',
          price: 0,
          currencyDisplay: '',
          currencyCode: '',
          description: '',
          variants: [],
        },
      ],
      id: 'id2',
    },
  ],
};

export const mbSlice = createSlice({
  name: 'mb',
  initialState,
  reducers: {
    setMbListData: (
      state,
      action: PayloadAction<
        {
          list: BannerDetailed[];
          sellerInfo: Seller;
          id: string;
        }[]
      >,
    ) => {
      state.mbListData = action.payload.map((item) => ({
        ...item,
        sellerInfo: {
          ...item.sellerInfo,
          isLoading: false,
        },
        list: item.list.map((itemList) => ({
          ...itemList,
          isLoading: false,
          displaySeller: false,
        })),
      }));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMbListData } = mbSlice.actions;

export default mbSlice.reducer;
