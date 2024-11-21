import React, { useEffect } from 'react';

import '../../../global.css';

import { DETAILED_BANNERS_DATA } from '../../../__mocks__/screens/home';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import LayoutBasicNoScroll from '@/components/new-components/layout-basic-no-scroll';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setHbmsListData, setSellerInfo } from '@/features/hmbsSlice';

export default function Index() {
  const dispatch = useDispatch();
  const hmbsData = useSelector((state: RootState) => state.hmbs);

  useEffect(() => {
    dispatch(setSellerInfo(DETAILED_BANNERS_DATA[0].seller));
    dispatch(setHbmsListData(DETAILED_BANNERS_DATA));
  }, [dispatch]);

  return (
    <LayoutBasicNoScroll>
      <TitleWithAvatar
        title={hmbsData.sellerInfo?.name ?? ''}
        id={hmbsData.sellerInfo?.id ?? ''}
        src={{ uri: hmbsData.sellerInfo?.image ?? '' }}
      />
      <BannerDetailedSlider data={hmbsData.hbmsListData} horizontal={false} displaySeller={false} />
    </LayoutBasicNoScroll>
  );
}
