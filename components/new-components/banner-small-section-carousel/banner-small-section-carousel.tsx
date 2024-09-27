import React from 'react';
import { BannerSmallSkeleton } from '../banner-small/banner-small-skeleton';
import BannerSmallSlider from '../banner-small/banner-small-slider';
import ContentWrapper from '../slider-wrapper';
import { BannerSmall } from '@/models/banner-small';

interface Props {
  data: BannerSmall[];
  isLoadingFirst?: boolean;
}

export const BannerSmallSectionCarousel = ({
  data,
  isLoadingFirst = data?.length === 0,
}: Props) => {
  return (
    <ContentWrapper text={'some title'} top={0} bottom={2}>
      {isLoadingFirst ? <BannerSmallSkeleton /> : <BannerSmallSlider data={data} />}
    </ContentWrapper>
  );
};
