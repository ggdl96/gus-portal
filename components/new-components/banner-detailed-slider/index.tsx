import React from 'react';
import BannerDetailedItem from '../banner-detailed-item';
import { useWindowDimensions, View } from 'react-native';
import { styles } from './styles';
import DefaultList from '../default-list';
import { BannerDetailed } from '@/models/banner-detailed';
import BannerDetailedSliderSkeleton from '../banner-detailed-slider-skeleton';
import borders from '@/styles/borders';

type Props = {
  data: BannerDetailed[];
  horizontal: boolean;
};
const BannerDetailedSlider = ({ data, horizontal = true }: Props) => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.733;
  const CONTAINER_HEIGHT = containerWidth * 0.51;

  return (
    <BannerDetailedSliderSkeleton
      width={containerWidth}
      height={CONTAINER_HEIGHT}
      borderRadius={borders.radius.medium}
    />
  );
  return (
    <DefaultList
      horizontal={horizontal}
      data={data}
      style={styles.fullWidth}
      pagingEnabled={true}
      renderItem={({ item, index }) => (
        <View
          style={[
            styles.itemWrapperHorizontal,
            {
              width: containerWidth,
            },
          ]}>
          <BannerDetailedItem
            full
            last={index === data.length - 1}
            spacing={2}
            horizontal={horizontal}
            data={item}
          />
        </View>
      )}
    />
  );
};

export default BannerDetailedSlider;
