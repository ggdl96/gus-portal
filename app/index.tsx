import BannerSlider from '@/components/new-components/banner-slider/banner-slider';
import BannerSmallSectionCarousel from '@/components/new-components/banner-small-section-carousel';
import React from 'react';
import {
  DETAILED_BANNERS_DATA,
  MEDIUM_BANNERS_DATA,
  SMALL_BANNERS_DATA,
  TOP_BANNERS_DATA,
} from '../__mocks__/screens/home';
import BannerMediumSlider from '@/components/new-components/banner-medium-slider';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import ContentWrapper from '@/components/new-components/content-wrapper';
import LayoutBasic from '@/components/new-components/layout-basic';

export default function Index() {
  return (
    <LayoutBasic>
      <BannerSlider data={TOP_BANNERS_DATA} type={'content'} />
      <BannerSlider data={TOP_BANNERS_DATA} type="product" />
      <BannerSmallSectionCarousel data={SMALL_BANNERS_DATA} />
      <ContentWrapper text="Top Data">
        <BannerMediumSlider data={MEDIUM_BANNERS_DATA} />
      </ContentWrapper>
      <ContentWrapper text={'Some cool data'} key={`ThemedContentWrapper`}>
        <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal={true} />
      </ContentWrapper>
    </LayoutBasic>
  );
}
