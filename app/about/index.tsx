import React from 'react';

import '../../global.css';

import BannerDescription from '@/components/new-components/banner-description';
import BannerSubTitle from '@/components/new-components/banner-subtitle';
import LayoutBasicNoScroll from '@/components/new-components/layout-basic-no-scroll';

export default function Index() {
  return (
    <LayoutBasicNoScroll>
      <BannerSubTitle title="Gus Portal is an app build to experiment with React Native Expo, to explore its capabilities." />
      <BannerSubTitle title="Techs" />
      <BannerDescription title="- React Native with Expo" />
      <BannerDescription title="- Nativewind (Tailwind setup for iOS, Android and Web)" />
      <BannerDescription title="- Jest, Testing Library" />
    </LayoutBasicNoScroll>
  );
}
