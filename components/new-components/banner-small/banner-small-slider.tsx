import React from 'react';
import BannerSmallComponent from './banner-small-component';
import { FlatList, useWindowDimensions, View } from 'react-native';
import { BannerSmall } from '@/models/banner-small';

type Props = {
  data?: BannerSmall[];
  height?: number;
  width?: number;
  pagingEnabled?: boolean;
  onEndReached?: (info?: { distanceFromEnd: number }) => void;
};
const Separator = () => <View style={{ width: 16, height: 20, backgroundColor: 'red' }} />;

export default function BannerSmallSlider({ data, onEndReached, pagingEnabled = false }: Props) {
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
              last={false}
              containerHeight={containerHeight}
              containerWidth={containerWidth}
              spacing={2}
              source={{
                uri: '',
              }}
            />
          );
        }}
        data={data}
        keyExtractor={(b) => {
          return b.id;
        }}
        ItemSeparatorComponent={Separator}
      />
    );
  }

  return null;
}
