import React from 'react';

import '../../global.css';

import { DETAILED_BANNERS_DATA } from '../../__mocks__/screens/home';
import DefaultList from '@/components/new-components/default-list';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import LayoutBasicNoScroll from '@/components/new-components/layout-basic-no-scroll';

export default function Index() {
  return (
    <LayoutBasicNoScroll>
      <DefaultList data={undefined} renderItem={undefined}></DefaultList>
      <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal={false} />
    </LayoutBasicNoScroll>
  );
}
