import React from 'react';
import BannerDetailedItem from '../banner-detailed-item';
import { useWindowDimensions } from 'react-native';
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
  const width = dimensions.width * 0.733;
  const height = width * 0.51;

  if (0) {
    return (
      <BannerDetailedSliderSkeleton
        width={width}
        height={height}
        borderRadius={borders.radius.medium}
      />
    );
  }

  return (
    <DefaultList
      horizontal={horizontal}
      data={data}
      style={styles.fullWidth}
      pagingEnabled={true}
      renderItem={({ item, index }) => (
        <BannerDetailedItem
          data={item}
          width={width}
          height={height}
          borderRadius={borders.radius.medium}
        />
      )}
    />
  );
};

export default BannerDetailedSlider;
