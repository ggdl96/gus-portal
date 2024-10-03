import React from 'react';
import { BannerTop } from '@/models/banner-top';
import Banner from '../banner';
import DefaultList from '../default-list';
import FeaturedBannerContent from '../featured-banner-content/featured-banner-content';
import FeaturedProduct from '../featured-product/featured-product';

type Props = {
  data?: BannerTop[];
  type: 'content' | 'product';
};
const BannerSlider = ({ data, type }: Props) => {
  const redirectToPreview = () => {};

  if (data) {
    return (
      <DefaultList
        horizontal
        renderItem={({ item }) => {
          return (
            <Banner
              redirectOnPress={redirectToPreview}
              source={{
                uri: item.image,
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
      />
    );
  }

  return null;
};

export default BannerSlider;
