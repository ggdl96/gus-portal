import React from 'react';
import DefaultList from '../default-list';
import borders from '@/styles/borders';
import BannerMediumItem from '../banner-medium-item';
import { router } from 'expo-router';
import { BannerMediumComponent } from '@/models/banner-medium-component/indext';

type Props = {
  data?: BannerMediumComponent[];
};

const BannerMediumSlider = ({ data }: Props) => {
  const RenderItem = ({ item }: { item: BannerMediumComponent }) => {
    const handleOnPress = () => {
      router.navigate(`/mb/${item.id}`);
    };
    return (
      <BannerMediumItem onPress={handleOnPress} data={item} borderRadius={borders.radius.medium} />
    );
  };
  return <DefaultList data={data} pagingEnabled={true} horizontal renderItem={RenderItem} />;
};

export default BannerMediumSlider;
