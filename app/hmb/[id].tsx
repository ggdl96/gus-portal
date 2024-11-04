import React from 'react';

import '../../global.css';

import { DETAILED_BANNERS_DATA } from '../../__mocks__/screens/home';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import { useWindowDimensions, View } from 'react-native';
import LayoutBasic from '@/components/new-components/layout-basic';

export default function Index() {
  const dimensions = useWindowDimensions();

  return (
    <LayoutBasic>
      <View
        className="w-full flex"
        style={{
          minHeight: dimensions.height,
        }}>
        <View className="w-full flex pb-6">
          <TitleWithAvatar
            title={DETAILED_BANNERS_DATA[0].seller.name}
            id={DETAILED_BANNERS_DATA[0].seller.id}
            src={{ uri: DETAILED_BANNERS_DATA[0].seller.image }}
          />
          <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal displaySeller={false} />
        </View>
        <View className="w-full flex  pb-6">
          <TitleWithAvatar
            title={DETAILED_BANNERS_DATA[0].seller.name}
            id={DETAILED_BANNERS_DATA[0].seller.id}
            src={{ uri: DETAILED_BANNERS_DATA[0].seller.image }}
          />
          <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal displaySeller={false} />
        </View>
        <View className="w-full flex  pb-6">
          <TitleWithAvatar
            title={DETAILED_BANNERS_DATA[0].seller.name}
            id={DETAILED_BANNERS_DATA[0].seller.id}
            src={{ uri: DETAILED_BANNERS_DATA[0].seller.image }}
          />
          <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal displaySeller={false} />
        </View>
      </View>
    </LayoutBasic>
  );
}
