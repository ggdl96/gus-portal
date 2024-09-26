import { BannerTop } from '@/models/banner-top';
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  data: BannerTop;
};

const FeaturedProduct = ({ data }: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
        padding: 10,
      }}>
      <Text
        numberOfLines={3}
        ellipsizeMode="tail"
        style={{
          fontWeight: '400',
          textAlign: 'center',
          color: '#f7f6f2',
          textTransform: 'uppercase',
        }}>
        {data.title}
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{
          fontWeight: '400',
          textAlign: 'center',
          color: '#f7f6f2',
          textTransform: 'uppercase',
        }}>
        {data.subTitle}
      </Text>
    </View>
  );
};

export default FeaturedProduct;
