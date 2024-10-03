import React from 'react';
import {
  Image,
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  DimensionValue,
  AnimatableNumericValue,
} from 'react-native';
import { BannerSmall } from '@/models/banner-small';
import styles from './styles';
import BannerTitle from '../banner-title';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  data: BannerSmall;
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
};

const BannerSmallItem = ({ data, onPress, width, height, borderRadius }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          height,
          width,
          borderRadius,
        },
      ]}>
      <Image style={styles.image} source={{ uri: data.urlImage }} />
      <View style={styles.content}>
        <View style={styles.sectionBottom}>
          <View style={styles.containerViews}>
            <BannerTitle title={data.title} />
          </View>
          <View style={styles.containerViews}>
            <Text style={styles.views}>{data.views} VIEWS</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default BannerSmallItem;
