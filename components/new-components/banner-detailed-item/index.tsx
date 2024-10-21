import { BannerDetailed } from '@/models/banner-detailed';
import borders from '@/styles/borders';
import React from 'react';

import { Image, View, Pressable, AnimatableNumericValue, DimensionValue } from 'react-native';
import styles from './styles';
import TitleWithAvatar from '../title-with-avatar';
import { router } from 'expo-router';
import BannerDescription from '../banner-description';
import BannerTitle from '../banner-title';

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
    <Pressable onPress={handleOnPress} style={[styles.container, { borderRadius, width }]}>
      <View style={[styles.containerImage, { width, borderRadius: borders.radius.medium, height }]}>
        <Image
          style={[styles.image, { borderRadius: borders.radius.medium }]}
          source={{ uri: data.image }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.body}>
        {displaySeller ? (
          <View className="flex flex-row w-1/2 pr-2">
            <TitleWithAvatar
              src={{ uri: data.seller.image }}
              title={data.seller.name}
              id={data.seller.id}
            />
          </View>
        ) : null}
        <View className="flex w-1/2 pl-2" style={{ paddingVertical: 12 }}>
          <View className="w-full flex flex-row justify-end">
            <BannerDescription title={data.title} />
          </View>
          <View className="w-full flex flex-row justify-end">
            <BannerTitle title={`${data.currencyDisplay} ${data.price}`} size="2xl" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default BannerDetailedItem;
