import React from 'react';
import Banner from '../banner';
import DefaultList from '../default-list';
import FeaturedBannerContent from '../featured-banner-content/featured-banner-content';
import FeaturedProduct from '../featured-product/featured-product';
import { router } from 'expo-router';
import { BannerTopComponent } from '@/models/banner-top-component';

type Props = {
  data: BannerTopComponent[];
};

const Item = ({ item }: { item: BannerTopComponent }) => {
  const redirectToPreview = (id: string) => {
    router.navigate(`/${item.type === 'content' ? 'hmbs' : 'hmb'}/${id}`);
  };

  return (
    <Banner onPress={redirectToPreview} item={item}>
      {item.type === 'content' ? (
        <FeaturedBannerContent data={item} />
      ) : (
        <FeaturedProduct data={item} />
      )}
    </Banner>
  );
};

const BannerSlider = ({ data }: Props) => {
  const keyExtractor = (bannerComponent: BannerTopComponent): string => {
    return bannerComponent.id;
  };

  return <DefaultList horizontal renderItem={Item} data={data} keyExtractor={keyExtractor} />;
};

export default BannerSlider;
