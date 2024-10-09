import React from 'react';

import '../../global.css';
import LayoutBasic from '@/components/new-components/layout-basic';
import { DETAILED_BANNERS_DATA } from '../../__mocks__/screens/home';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import { View, Text } from 'react-native';
import BannerDescription from '@/components/new-components/banner-description';
import ContentWrapper from '@/components/new-components/content-wrapper';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import '../../global.css';

export default function Index() {
  return (
    <LayoutBasic>
      <TitleWithAvatar
        title={DETAILED_BANNERS_DATA[0].seller.name}
        src={{ uri: DETAILED_BANNERS_DATA[0].seller.image }}
      />
      <View className="flex w-full">
        <Text className="color-contrastSecondary-900">Reputation: TOP</Text>
        <BannerDescription title="Here should go a short description of this particular seller." />
        <View className="pt-14 w-full flex-1">
          <Text className="color-primary-650">Location: Country state/province City ST 12345</Text>
          <View className="pt-2" />
          <Text className="color-contrastSecondary-900">SALES IN LAST MONTH: 1235.00</Text>
          <View className="pt-2" />
          <View className="pt-6" />
          <ContentWrapper text={'Data 1'} key={`ThemedContentWrapper`} seeAll>
            <BannerDetailedSlider
              data={DETAILED_BANNERS_DATA}
              horizontal={true}
              displaySeller={false}
            />
          </ContentWrapper>
        </View>
      </View>
    </LayoutBasic>
  );
}
