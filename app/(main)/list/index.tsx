import React from 'react';

import '../../../global.css';

import { DETAILED_BANNERS_DATA } from '../../../__mocks__/screens/home';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import LayoutBasicNoScroll from '@/components/new-components/layout-basic-no-scroll';
import { useLocalSearchParams } from 'expo-router';
import SearchListHead from '@/components/new-components/search-list-head';
import { View } from 'react-native';
import useSearchListResults from '@/hooks/use-search-list-results';

const HeaderComponent = () => {
  const params = useLocalSearchParams();

  return (
    <View className="w-full flex flex-row" style={{ height: 80 }}>
      <SearchListHead
        searchValue={params.search as string}
        resultCount={DETAILED_BANNERS_DATA.length}
      />
    </View>
  );
};

const FooterComponent = () => (
  <View
    className="flex flex-row w-full"
    style={{
      height: 36,
    }}>
    <View className="w-full" />
  </View>
);

export default function Index() {
  const results = useSearchListResults();

  return (
    <LayoutBasicNoScroll>
      <BannerDetailedSlider
        data={results.list}
        horizontal={false}
        HeaderComponent={HeaderComponent}
        FooterComponent={FooterComponent}
      />
    </LayoutBasicNoScroll>
  );
}
