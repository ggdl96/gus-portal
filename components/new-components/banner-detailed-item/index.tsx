import { BannerDetailed } from '@/models/banner-detailed';
import borders from '@/styles/borders';
import React from 'react';

import {
  TouchableOpacity,
  Image,
  View,
  Pressable,
  Text,
  AnimatableNumericValue,
  DimensionValue,
} from 'react-native';
import Avatar from '../avatar';
import styles from './styles';

interface PropsItem {
  full?: boolean;
  last?: boolean;
  spacing?: number;
  horizontal?: boolean;
  data: BannerDetailed;
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
}

const BannerDetailedItem = ({ width, data, height, borderRadius }: PropsItem) => {
  const handleOnPress = () => {};

  const handleOnPressLowerSection = () => {};

  return (
    <Pressable onPress={handleOnPress} style={[styles.container, { borderRadius }]}>
      <View
        style={[
          styles.containerImage,
          {
            height,
          },
        ]}>
        <Image
          style={[styles.image, { width, borderRadius: borders.radius.medium, height }]}
          source={{ uri: data.image }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={handleOnPressLowerSection}>
          <Avatar src={{ uri: data.image }} />
        </TouchableOpacity>
        <View style={styles.containerText}>
          <View style={styles.containerOwner}>
            <TouchableOpacity onPress={handleOnPressLowerSection}>
              <Text numberOfLines={1} style={styles.textOwnerName}>
                {data?.owner?.name}
              </Text>
            </TouchableOpacity>
            <Text style={styles.detail}>
              {'  |  '}
              {'- 0'}
            </Text>
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.title} numberOfLines={2}>
              {data.title ?? ''}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default BannerDetailedItem;
