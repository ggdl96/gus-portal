import React from 'react';
import { SlideSkeleton } from './slider-skeleton';
import { useWindowDimensions, View } from 'react-native';
import MediumSlide from './slide';
import DefaultList from '../default-list';
import { BannerMedium } from '@/models/banner-medium/indext';
import { bannerMediumSliderStyles } from './banner-medium-slider.styles';

type Props = {
  data?: BannerMedium[];
};

const BannerMediumSlider = ({ data }: Props) => {
  const dimenstions = useWindowDimensions();
  const containerWidth = dimenstions.width * 0.55;
  const containerHeight = containerWidth * 1.5;
  const sideVisibleWidth = dimenstions.width * 0.25;

  if (data?.length) {
    const _handleOnPress = () => {};

    return (
      <DefaultList
        data={data}
        pagingEnabled={true}
        horizontal
        renderItem={({ item, index }) => (
          <View
            style={[
              { width: containerWidth, height: containerHeight },
              bannerMediumSliderStyles.containerItem,
            ]}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: containerWidth,
                height: containerHeight,
              }}>
              <MediumSlide
                onPress={() => _handleOnPress()}
                data={item}
                source={{ uri: item.image }}
                width={containerWidth}
                spacing={sideVisibleWidth / 10}
                last={index === data.length}
              />
            </View>
          </View>
        )}
      />
    );
  }

  return <SlideSkeleton />;
};

export default BannerMediumSlider;
