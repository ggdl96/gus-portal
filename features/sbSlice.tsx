import { BannerDetailed } from '@/models/banner-detailed';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SBState {
  sbListData: BannerDetailed[];
}

const initialState: SBState = {
  sbListData: [],
};

export const sbSlice = createSlice({
  name: 'sb',
  initialState,
  reducers: {
    setSbListData: (state, action: PayloadAction<BannerDetailed[]>) => {
      state.sbListData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSbListData } = sbSlice.actions;

export default sbSlice.reducer;
