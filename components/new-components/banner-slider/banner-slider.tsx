import React from 'react';
import { BannerTop } from '@/models/banner-top';
import { FlatList, View } from 'react-native';
import Banner from '../banner/banner';
import FeaturedBannerContent from '../banner/featured-banner-content';
import FeaturedProduct from '../banner/featured-product';

type Props = {
  data?: BannerTop[];
  type: 'content' | 'product';
};

const Separator = () => <View style={{ width: 20, height: 20 }} />;

export default function BannerSlider({ data, type }: Readonly<Props>) {
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
              {type === 'content' ? (
                <FeaturedBannerContent data={item} />
              ) : (
                <FeaturedProduct data={item} />
              )}
            </Banner>
          );
        }}
        data={data}
        keyExtractor={(b) => {
          return b.id;
        }}
        ItemSeparatorComponent={Separator}
        style={{
          overflow: 'scroll',
          width: '100%',
        }}
      />
    );
  }

  return null;
}
