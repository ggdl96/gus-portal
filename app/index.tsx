import BannerSlider from '@/components/new-components/banner-slider/banner-slider';
import BannerSmallSectionCarousel from '@/components/new-components/banner-small-section-carousel';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { SMALL_BANNERS_DATA, TOP_BANNERS_DATA } from '../__mocks__/screens/home';
import ContentWrapper from '@/components/new-components/slider-wrapper';
import BannerMediumSlider from '@/components/new-components/banner-medium-slider';
import BannerDetailedSlider from '@/components/new-components/banner-detailed-slider';

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
          <ContentWrapper text={'Some cool data'} key={`ThemedContentWrapper`} top={20}>
            <BannerDetailedSlider
              data={[
                {
                  owner: {
                    id: 'bbcvbv55hs5s21c',
                    name: 'ghfh',
                    image:
                      'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  },
                  id: 'ty453gdfgdfg456gd5',
                  image:
                    'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  title: 'Test',
                },
              ]}
              horizontal={true}
            />
          </ContentWrapper>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
