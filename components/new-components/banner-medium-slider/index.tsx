import React from 'react';
import { useWindowDimensions } from 'react-native';
import DefaultList from '../default-list';
import { BannerMedium } from '@/models/banner-medium/indext';
import borders from '@/styles/borders';
import MediumSlideSkeleton from '../banner-medium-skeleton';
import BannerMediumItem from '../banner-medium-item';
import { screens } from '@/styles/screens';

type Props = {
  data?: BannerMedium[];
};

const BannerMediumSlider = ({ data }: Props) => {
  const dimensions = useWindowDimensions();
  const width = (dimensions.width > screens.lg ? 500 : dimensions.width) * 0.54;
  const height = width * 1.5;

  if (data?.length) {
    const _handleOnPress = () => {};

    return (
      <DefaultList
        data={data}
        pagingEnabled={true}
        horizontal
        renderItem={({ item, index }) => (
          <BannerMediumItem
            onPress={() => _handleOnPress()}
            data={item}
            source={{ uri: item.image }}
            width={width}
            height={height}
            borderRadius={borders.radius.medium}
          />
        )}
      />
    );
  }

  return <MediumSlideSkeleton width={width} height={height} borderRadius={borders.radius.medium} />;
};

export default BannerMediumSlider;
