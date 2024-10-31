import React from 'react';

import '../../global.css';

import { DETAILED_BANNERS_DATA } from '../../__mocks__/screens/home';
import LayoutBasic from '@/components/new-components/layout-basic';
import borders from '@/styles/borders';
import BannerDetailedItem from '@/components/new-components/banner-detailed-item';
import { useWindowDimensions, View } from 'react-native';
import { screens } from '@/styles/screens';
import { useLocalSearchParams } from 'expo-router';
import SearchListHead from '@/components/new-components/search-list-head';

export default function Index() {
  const dimensions = useWindowDimensions();

  const bannerWidth = dimensions.width > screens.lg ? '48%' : '98%';
  const bannerHeight = dimensions.width * (dimensions.width > screens.lg ? 0.22 : 0.44);
  const params = useLocalSearchParams();

  return (
    <LayoutBasic applyVerticalPadding>
      <View
        className="flex w-full flex-row flex-wrap justify-between"
        style={{ height: dimensions.height }}>
        <SearchListHead
          searchValue={params.search as string}
          resultCount={DETAILED_BANNERS_DATA.length}
        />
        {DETAILED_BANNERS_DATA.map((item) => (
          <BannerDetailedItem
            data={item}
            width={bannerWidth}
            height={bannerHeight}
            borderRadius={borders.radius.medium}
            displaySeller
            key={`product_${item.id}`}
          />
        ))}
      </View>
    </LayoutBasic>
  );
}
