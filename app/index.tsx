import BannerSlider from '@/components/new-components/banner-slider/banner-slider';
import { BannerTop } from '@/models/banner-top';
import React from 'react';
import { View } from 'react-native';

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
  const data = [dataAux, dataAux2, dataAux3];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <BannerSlider data={data} />
    </View>
  );
}
