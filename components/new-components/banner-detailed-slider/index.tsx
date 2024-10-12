import React from 'react';
import BannerDetailedItem from '../banner-detailed-item';
import { useWindowDimensions } from 'react-native';
import { styles } from './styles';
import DefaultList from '../default-list';
import { BannerDetailed } from '@/models/banner-detailed';
import BannerDetailedSliderSkeleton from '../banner-detailed-slider-skeleton';
import borders from '@/styles/borders';
import { screens } from '@/styles/screens';

type Props = {
  data: BannerDetailed[];
  horizontal: boolean;
  displaySeller?: boolean;
};

const BannerDetailedSlider = ({ data, horizontal = true, displaySeller = true }: Props) => {
  const dimensions = useWindowDimensions();
  const width = (dimensions.width > screens.lg ? 580 : dimensions.width) * 0.7;
  const height = width * 0.5;

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
      style={styles.list}
      pagingEnabled={true}
      renderItem={({ item }) => (
        <BannerDetailedItem
          data={item}
          width={width}
          height={height}
          borderRadius={borders.radius.medium}
          displaySeller={displaySeller}
        />
      )}
    />
  );
};

export default BannerDetailedSlider;
