import React from 'react';
import { AnimatableNumericValue, DimensionValue } from 'react-native';
import { BannerSmall } from '@/models/banner-small';
import DefaultList from '../default-list';
import BannerSmallItem from '../banner-small-item';
import { router } from 'expo-router';

type Props = {
  data: BannerSmall[];
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
};

const BannerSmallSlider = ({ data, width, height, borderRadius }: Props) => {
  return (
    <DefaultList
      horizontal
      renderItem={({ item }) => {
        const handleOnPress = () => {
          router.navigate(`sb/${item.id}`);
        };
        return (
          <BannerSmallItem
            onPress={handleOnPress}
            data={item}
            height={height}
            width={width}
            borderRadius={borderRadius}
          />
        );
      }}
      data={data}
      keyExtractor={(b) => {
        return b.id;
      }}
    />
  );
};

export default BannerSmallSlider;
