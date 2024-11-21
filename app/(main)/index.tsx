import BannerSlider from '@/components/new-components/banner-slider';
import BannerSmallSectionCarousel from '@/components/new-components/banner-small-section-carousel';
import React, { useEffect } from 'react';
import {
  DETAILED_BANNERS_DATA,
  MEDIUM_BANNERS_DATA,
  SMALL_BANNERS_DATA,
  TOP_BANNERS_DATA,
} from '../../__mocks__/screens/home';
import BannerMediumSlider from '@/components/new-components/banner-medium-slider';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import ContentWrapper from '@/components/new-components/content-wrapper';
import LayoutBasic from '@/components/new-components/layout-basic';
import { Platform } from 'react-native';
import {
  setTopBannersWithSeller,
  setTopBannersWithoutSeller,
  setMediumBannersData,
  setSmallBannersData,
  setDetailedBannersData,
} from '@/features/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Index() {
  const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(setTopBannersWithSeller(TOP_BANNERS_DATA));
    dispatch(setTopBannersWithoutSeller(TOP_BANNERS_DATA));
    dispatch(setMediumBannersData(MEDIUM_BANNERS_DATA));
    dispatch(setDetailedBannersData(DETAILED_BANNERS_DATA));
    dispatch(setSmallBannersData(SMALL_BANNERS_DATA));
  }, [dispatch]);

  return (
    <LayoutBasic displayFooter={isMobile}>
      <BannerSlider data={data.topBannersWithSeller} type={'content'} />
      <BannerSlider data={data.topBannersWithoutSeller} type="product" />
      <BannerSmallSectionCarousel data={data.smallBannersData} />
      <ContentWrapper text="Top Data">
        <BannerMediumSlider data={data.mediumBannersData} />
      </ContentWrapper>
      <ContentWrapper text={'Some cool data'} key={`ThemedContentWrapper`}>
        <BannerDetailedSlider data={data.detailedBannersData} horizontal={true} />
      </ContentWrapper>
    </LayoutBasic>
  );
}
