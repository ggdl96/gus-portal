import React from 'react';
import { useWindowDimensions } from 'react-native';
import { BannerSmall } from '@/models/banner-small';
import DefaultList from '../default-list';
import BannerSmallItem from '../banner-small-item';

type Props = {
  data?: BannerSmall[];
};

const BannerSmallSlider = ({ data }: Props) => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.35;
  const containerHeight = containerWidth * 1.7;

  if (data) {
    return (
      <DefaultList
        horizontal
        renderItem={({ item }) => {
          return (
            <BannerSmallItem
              onPress={() => {}}
              data={item}
              containerHeight={containerHeight}
              containerWidth={containerWidth}
            />
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

export default BannerSmallSlider;
