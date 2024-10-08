import React from 'react';

import '../../global.css';
import LayoutBasic from '@/components/new-components/layout-basic';
import borders from '@/styles/borders';
import BannerDetailedItem from '@/components/new-components/banner-detailed-item';
import { DETAILED_BANNERS_DATA } from '../../__mocks__/screens/home';

export default function Index() {
  return (
    <LayoutBasic>
      <BannerDetailedItem
        data={DETAILED_BANNERS_DATA[0]}
        width={500}
        height={100}
        borderRadius={borders.radius.medium}
      />
    </LayoutBasic>
  );
}
