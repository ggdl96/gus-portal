import BannerSlider from '@/components/new-components/banner-slider/banner-slider';
import { BannerSmallSectionCarousel } from '@/components/new-components/banner-small-section-carousel/banner-small-section-carousel';
import { BannerSmall } from '@/models/banner-small';
import { BannerTop } from '@/models/banner-top';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  const dataAux: BannerTop = {
    id: 'zdfgvbfghtr6gh8ghjl67j',
    title: 'Some Title!',
    subTitle: 'sub title',
    isOwned: false,
    owner: {
      id: 'fgdfg98dfg4g3glkj',
      name: 'User Name',
      image: '',
    },
  };

  const dataAux2: BannerTop = {
    id: 'zdfgvbfghtr6gh8ghjl67xcz',
    title: 'Some Title!',
    subTitle: 'sub title',
    isOwned: false,
    owner: {
      id: 'fgdfg98dfg4g3glkj',
      name: 'User Name',
      image: '',
    },
  };

  const dataAux3: BannerTop = {
    id: 'zdfgvbfghtr6gh8ghjl67js',
    title: 'Some Title!',
    subTitle: 'sub title',
    isOwned: false,
    owner: {
      id: 'fgdfg98dfg4g3glkj',
      name: 'User Name',
      image: '',
    },
  };

  const smallA1: BannerSmall = {
    id: 'fgdfg8dfg89gd',
    title: 'Some Small',
    urlImage: '',
    views: 23,
  };
  const smallA2: BannerSmall = {
    id: 'fgdfg8dfg89gd45Fg',
    title: 'Some Small',
    urlImage: '',
    views: 6,
  };
  const smallA3: BannerSmall = {
    id: 'fgdfg8dfg89gdnvbnJ564h',
    title: 'Some Small',
    urlImage: '',
    views: 1,
  };
  const data = [dataAux, dataAux2, dataAux3];

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
          <BannerSlider data={data} type={'content'} />
          <BannerSmallSectionCarousel isLoadingFirst={false} data={[smallA1, smallA2, smallA3]} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
