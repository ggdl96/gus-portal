import BannerSlider from '@/components/new-components/banner-slider/banner-slider';
import BannerSmallSectionCarousel from '@/components/new-components/banner-small-section-carousel';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { SMALL_BANNERS_DATA, TOP_BANNERS_DATA } from '../__mocks__/screens/home';
import ContentWrapper from '@/components/new-components/slider-wrapper';
import BannerMediumSlider from '@/components/new-components/banner-medium-slider';

export default function Index() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView
        style={{
          backgroundColor: '#111',
          flex: 1,
        }}>
        <ScrollView
          style={{
            backgroundColor: '#111',
          }}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BannerSlider data={TOP_BANNERS_DATA} type={'content'} />
          <BannerSmallSectionCarousel isLoadingFirst={false} data={SMALL_BANNERS_DATA} />
          <ContentWrapper text="Top Data">
            <BannerMediumSlider
              data={[
                {
                  categories: ['cat1'],
                  text: 'some text',
                  image:
                    'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                },
              ]}
            />
          </ContentWrapper>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
