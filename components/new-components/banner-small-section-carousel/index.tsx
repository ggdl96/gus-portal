import React from 'react';
import BannerSmallSlider from '../banner-small';
import ContentWrapper from '../content-wrapper';
import { BannerSmall } from '@/models/banner-small';
import { BannerSmallSkeleton } from '../banner-small-skeleton';
import { useWindowDimensions } from 'react-native';
import borders from '@/styles/borders';
import { screens } from '@/styles/screens';

interface Props {
  data: BannerSmall[];
}

const BannerSmallSectionCarousel = ({ data }: Props) => {
  const dimensions = useWindowDimensions();
  const containerWidth = (dimensions.width > screens.lg ? 430 : dimensions.width) * 0.32;
  const containerHeight = containerWidth * 1.7;
  const borderRadius = borders.radius.medium;

  return (
    <ContentWrapper text={'some title'}>
      {0 ? (
        <BannerSmallSkeleton
          id={''}
          width={containerWidth}
          height={containerHeight}
          borderRadius={borderRadius}
        />
      ) : (
        <BannerSmallSlider
          data={data}
          width={containerWidth}
          height={containerHeight}
          borderRadius={borderRadius}
        />
      )}
    </ContentWrapper>
  );
};

export default BannerSmallSectionCarousel;
