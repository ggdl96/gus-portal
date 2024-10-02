import React from 'react';
import BannerSmallSlider from '../banner-small';
import ContentWrapper from '../slider-wrapper';
import { BannerSmall } from '@/models/banner-small';
import { BannerSmallSkeleton } from '../banner-small-skeleton';
import { useWindowDimensions } from 'react-native';
import borders from '@/styles/borders';

interface Props {
  data: BannerSmall[];
  isLoadingFirst?: boolean;
}

const BannerSmallSectionCarousel = ({ data, isLoadingFirst = data?.length === 0 }: Props) => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.35;
  const containerHeight = containerWidth * 1.7;
  const borderRadius = borders.radius.medium;

  return (
    <ContentWrapper text={'some title'} top={0} bottom={2}>
      {1 ? (
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
