import React from 'react';
import BannerSmallSlider from '../banner-small';
import ContentWrapper from '../content-wrapper';
import { BannerSmallComponent } from '@/models/banner-small-component';

interface Props {
  data: BannerSmallComponent[];
}

const BannerSmallSectionCarousel = ({ data }: Props) => {
  return <ContentWrapper text={'some title'}>{<BannerSmallSlider data={data} />}</ContentWrapper>;
};

export default BannerSmallSectionCarousel;
