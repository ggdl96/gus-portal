import React from 'react';

import '../../../global.css';

import { DETAILED_BANNERS_DATA } from '../../../__mocks__/screens/home';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import LayoutBasic from '@/components/new-components/layout-basic';

export default function Index() {
  return (
    <LayoutBasic>
      <TitleWithAvatar
        title={DETAILED_BANNERS_DATA[0].seller.name}
        id={DETAILED_BANNERS_DATA[0].seller.id}
        src={{ uri: DETAILED_BANNERS_DATA[0].seller.image }}
      />
      <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal displaySeller={false} />
      <TitleWithAvatar
        title={DETAILED_BANNERS_DATA[0].seller.name}
        id={DETAILED_BANNERS_DATA[0].seller.id}
        src={{ uri: DETAILED_BANNERS_DATA[0].seller.image }}
      />
      <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal displaySeller={false} />
      <TitleWithAvatar
        title={DETAILED_BANNERS_DATA[0].seller.name}
        id={DETAILED_BANNERS_DATA[0].seller.id}
        src={{ uri: DETAILED_BANNERS_DATA[0].seller.image }}
      />
      <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal displaySeller={false} />
    </LayoutBasic>
  );
}
