import { BannerDetailed } from '@/models/banner-detailed';
import borders from '@/styles/borders';
import React from 'react';

import { Image, View, Pressable, AnimatableNumericValue, DimensionValue } from 'react-native';
import styles from './styles';
import TitleWithAvatar from '../title-with-avatar';
import { router } from 'expo-router';

interface PropsItem {
  data: BannerDetailed;
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
  displaySeller?: boolean;
}

const BannerDetailedItem = ({
  width,
  data,
  height,
  borderRadius,
  displaySeller = true,
}: PropsItem) => {
  const handleOnPress = () => {
    router.push(`/product/${data.id}`);
  };

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
        {displaySeller ? (
          <TitleWithAvatar
            src={{ uri: data.seller.image }}
            title={data.seller.name}
            id={data.seller.id}
          />
        ) : null}
      </View>
    </Pressable>
  );
};

export default BannerDetailedItem;
