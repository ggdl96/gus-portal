import { BannerMedium } from '@/models/banner-medium/indext';
import React from 'react';
import { Image, Pressable, View, Text, AnimatableNumericValue, DimensionValue } from 'react-native';
import styles from './styles';
import BannerTitle from '../banner-title';

type Props = {
  onPress: Function;
  data: BannerMedium;
  source: {
    uri: string;
  };
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
};

const BannerMediumItem = ({ data, source, onPress, width, height, borderRadius }: Props) => {
  return (
    <Pressable
      style={[
        styles.wrapper,
        {
          width,
          borderRadius,
          height,
        },
      ]}
      onPress={onPress}>
      <Image style={styles.container} source={source} resizeMode={'cover'} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.categories}>{data.categories.join(', ')}</Text>
          <BannerTitle title={data.text} />
        </View>
      </View>
    </Pressable>
  );
};

export default BannerMediumItem;
