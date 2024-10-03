import { BannerTop } from '@/models/banner-top';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import BannerTitle from '../banner-title';
import BannerSubTitle from '../banner-subtitle';

type Props = {
  data: BannerTop;
};

const FeaturedProduct = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <BannerTitle title={data.title} />
      <BannerSubTitle title={data.subTitle} />
    </View>
  );
};

export default FeaturedProduct;
