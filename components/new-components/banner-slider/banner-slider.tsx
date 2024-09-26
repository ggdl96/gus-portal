import React from 'react';
import { BannerTop } from '@/models/banner-top';
import { FlatList, View } from 'react-native';
import Banner from '../banner/banner';
import FeaturedBannerContent from '../banner/featured-banner-content';
import FeaturedProduct from '../banner/featured-product';

type Props = {
  data?: BannerTop[];
  navigate?: boolean;
};

export default function BannerSlider({ data, navigate = true }: Readonly<Props>) {
  const redirectToPreview = () => {};

  if (data) {
    return (
      <FlatList
        horizontal
        renderItem={({ item }) => {
          return (
            <Banner
              redirectOnPress={redirectToPreview}
              source={{
                uri: '',
              }}>
              {true ? <FeaturedBannerContent data={item} /> : <FeaturedProduct data={item} />}
            </Banner>
          );
        }}
        data={data}
        keyExtractor={(b) => {
          return b.id;
        }}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: 'yellow', width: 20, height: 20 }} />
        )}
      />
    );
  }

  return null;
}
