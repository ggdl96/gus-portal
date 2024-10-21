import React from 'react';
import {
  Image,
  View,
  Pressable,
  GestureResponderEvent,
  DimensionValue,
  AnimatableNumericValue,
} from 'react-native';
import { BannerSmall } from '@/models/banner-small';
import styles from './styles';
import BannerTitle from '../banner-title';
import BannerSection from '../banner-section/banner-section';
import colors from '@/styles/colors';
import BannerSubTitle from '../banner-subtitle';

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
        <View className="w-full justify-end flex flex-1">
          <BannerSection backgroundColor={colors.tertiary[650]}>
            <BannerTitle title={data.title} size="3xl" />
          </BannerSection>
        </View>
        <View className="w-full flex flex-1">
          <BannerSection backgroundColor={colors.primary[650]}>
            <BannerSubTitle title={`${data.views} views`} />
          </BannerSection>
        </View>
      </View>
    </Pressable>
  );
};

export default BannerSmallItem;
