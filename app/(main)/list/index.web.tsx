import React from 'react';

import '../../../global.css';

import { DETAILED_BANNERS_DATA } from '../../../__mocks__/screens/home';
import LayoutBasic from '@/components/new-components/layout-basic';
import borders from '@/styles/borders';
import BannerDetailedItem from '@/components/new-components/banner-detailed-item';
import { useWindowDimensions, View } from 'react-native';
import { screens } from '@/styles/screens';
import { useLocalSearchParams } from 'expo-router';
import SearchListHead from '@/components/new-components/search-list-head';
import BannerSubTitle from '@/components/new-components/banner-subtitle';

export default function Index() {
  const dimensions = useWindowDimensions();

  const bannerWidth = dimensions.width * (dimensions.width > screens.lg ? 0.346 : 0.78);
  const imageHeight = bannerWidth * 0.44;
  const bannerHeight = imageHeight + 160;
  const params = useLocalSearchParams();

  return (
    <LayoutBasic applyVerticalPadding>
      <View className="flex w-full" style={{ minHeight: dimensions.height }}>
        <View className="flex w-full flex-row flex-wrap  justify-center lg:justify-between">
          <SearchListHead
            searchValue={params.search as string}
            resultCount={DETAILED_BANNERS_DATA.length}
          />
          {DETAILED_BANNERS_DATA.map((item) => (
            <View className="pt-2 pb-2" key={`product_${item.id}`}>
              <BannerDetailedItem
                data={item}
                width={bannerWidth}
                height={bannerHeight}
                borderRadius={borders.radius.medium}
                displaySeller
                imageHeight={imageHeight}
              />
            </View>
          ))}
        </View>
        <View className="flex flex-row w-full p-4">
          <View className="flex flex-row border-t-2 border-t-contrastPrimary-80 w-full justify-center pb-2">
            {['1', '2'].map((item) => (
              <View className="p-2" key={item}>
                <BannerSubTitle title={item} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </LayoutBasic>
  );
}
