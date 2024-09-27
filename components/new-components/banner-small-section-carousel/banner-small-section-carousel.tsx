import React from 'react';
import { BannerSmallSkeleton } from '../banner-small/banner-small-skeleton';
import BannerSmallSlider from '../banner-small/banner-small-slider';
import ThemedContentWrapper from '../themed-slider-wrapper';
import { BannerSmall } from '@/models/banner-small';

interface Props {
  data: BannerSmall[];
  onEndReached?: (info?: { distanceFromEnd: number }) => void;
  pagingEnabled?: boolean;
  noTitle?: boolean;
  isLoadingFirst?: boolean;
}

export const BannerSmallSectionCarousel = ({
  data,
  onEndReached,
  pagingEnabled,
  isLoadingFirst = data?.length === 0,
}: Props) => {
  return (
    <ThemedContentWrapper text={'some title'} top={0} bottom={2}>
      {isLoadingFirst ? (
        <BannerSmallSkeleton />
      ) : (
        <BannerSmallSlider data={data} onEndReached={onEndReached} pagingEnabled={pagingEnabled} />
      )}
    </ThemedContentWrapper>
  );
};
