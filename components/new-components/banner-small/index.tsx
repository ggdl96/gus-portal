import React from 'react';
import { BannerSmall } from '@/models/banner-small';
import DefaultList from '../default-list';
import BannerSmallItem from '../banner-small-item';
import { router } from 'expo-router';
import { BannerSmallComponent } from '@/models/banner-small-component';
import BannerSizes from '@/constants/banner-sizes';

type Props = {
  data: BannerSmallComponent[];
};

const RenderItem = ({ item }: { item: BannerSmallComponent }) => {
  const handleOnPress = () => {
    router.navigate(`/sb/${item.id}`);
  };

  return (
    <BannerSmallItem
      onPress={handleOnPress}
      data={item}
      height={BannerSizes.small.height}
      width={BannerSizes.small.width}
    />
  );
};

const BannerSmallSlider = ({ data }: Props) => {
  const keyExtractor = (bannerSmall: BannerSmall): string => {
    return bannerSmall.id;
  };

  return <DefaultList horizontal renderItem={RenderItem} data={data} keyExtractor={keyExtractor} />;
};

export default BannerSmallSlider;
