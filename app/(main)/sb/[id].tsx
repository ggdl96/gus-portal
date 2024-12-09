import React, { useEffect } from 'react';

import '../../../global.css';

import { DETAILED_BANNERS_DATA } from '../../../__mocks__/screens/home';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import LayoutBasicNoScroll from '@/components/new-components/layout-basic-no-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSbListData } from '@/features/sbSlice';

export default function Index() {
  const dispatch = useDispatch();
  const sbData = useSelector((state: RootState) => state.sb);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setSbListData(DETAILED_BANNERS_DATA));
    }, 3222);
  }, [dispatch]);

  return (
    <LayoutBasicNoScroll>
      <BannerDetailedSlider data={sbData.sbListData} horizontal={false} />
    </LayoutBasicNoScroll>
  );
}
