import React from 'react';
import { Image, View, Text, Pressable, GestureResponderEvent } from 'react-native';
import { BannerSmall } from '@/models/banner-small';
import styles from './styles';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  data: BannerSmall;
  containerHeight: number;
  containerWidth: number;
};

const BannerSmallItem = ({ data, onPress, containerHeight, containerWidth }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          height: containerHeight,
          width: containerWidth,
        },
      ]}>
      <Image style={styles.image} source={{ uri: '' }} />
      <View style={styles.content}>
        <View style={styles.sectionBottom}>
          <View style={styles.containerViews}>
            <Text numberOfLines={3} style={styles.title}>
              {data.title}
            </Text>
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
