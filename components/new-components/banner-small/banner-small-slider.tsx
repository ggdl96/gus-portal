import React from 'react';
import BannerSmallComponent from './banner-small-component';
import { FlatList, useWindowDimensions, View } from 'react-native';
import { BannerSmall } from '@/models/banner-small';

type Props = {
  data?: BannerSmall[];
};

const Separator = () => <View style={{ width: 16, height: 20 }} />;

const BannerSmallSlider = ({ data }: Props) => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.35;
  const containerHeight = containerWidth * 1.7;

  if (data) {
    return (
      <FlatList
        horizontal
        renderItem={({ item }) => {
          return (
            <BannerSmallComponent
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
        ItemSeparatorComponent={Separator}
        style={{
          overflow: 'scroll',
          width: '100%',
        }}
      />
    );
  }

  return null;
};

export default BannerSmallSlider;
