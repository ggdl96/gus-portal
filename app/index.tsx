import BannerSlider from '@/components/new-components/banner-slider/banner-slider';
import BannerSmallSectionCarousel from '@/components/new-components/banner-small-section-carousel';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  DETAILED_BANNERS_DATA,
  MEDIUM_BANNERS_DATA,
  SMALL_BANNERS_DATA,
  TOP_BANNERS_DATA,
} from '../__mocks__/screens/home';
import BannerMediumSlider from '@/components/new-components/banner-medium-slider';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';
import colors from '@/styles/colors';
import ContentWrapper from '@/components/new-components/content-wrapper';

export default function Index() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
          <BannerSlider data={TOP_BANNERS_DATA} type={'content'} />
          <BannerSmallSectionCarousel isLoadingFirst={false} data={SMALL_BANNERS_DATA} />
          <ContentWrapper text="Top Data">
            <BannerMediumSlider data={MEDIUM_BANNERS_DATA} />
          </ContentWrapper>
          <ContentWrapper text={'Some cool data'} key={`ThemedContentWrapper`}>
            <BannerDetailedSlider data={DETAILED_BANNERS_DATA} horizontal={true} />
          </ContentWrapper>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.contrastPrimary[10],
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.contrastPrimary[10],
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
