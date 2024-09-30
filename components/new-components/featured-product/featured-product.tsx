import { BannerTop } from '@/models/banner-top';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  data: BannerTop;
};

const FeaturedProduct = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
        {data.title}
      </Text>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.subtitle}>
        {data.subTitle}
      </Text>
    </View>
  );
};

export default FeaturedProduct;
