import React from 'react';

import '../../../global.css';

import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import LayoutBasicNoScroll from '@/components/new-components/layout-basic-no-scroll';
import SearchListHead from '@/components/new-components/search-list-head';
import { View } from 'react-native';
import useSearchListResults from '@/hooks/use-search-list-results';

const HeaderComponent = () => {
  const searchData = useSearchListResults();

  return (
    <View className="w-full flex flex-row" style={{ height: 80 }}>
      <SearchListHead searchValue={searchData.searchValue} resultCount={searchData.results.count} />
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
  const searchData = useSearchListResults();

  return (
    <LayoutBasicNoScroll>
      <BannerDetailedSlider
        data={searchData.results.list}
        horizontal={false}
        HeaderComponent={HeaderComponent}
        FooterComponent={FooterComponent}
      />
    </LayoutBasicNoScroll>
  );
}
