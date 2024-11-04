import { BannerDetailed } from '@/models/banner-detailed';
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
  imageHeight: DimensionValue;
  borderRadius: AnimatableNumericValue;
  displaySeller?: boolean;
}

const BannerDetailedItem = ({
  width,
  data,
  height,
  borderRadius,
  displaySeller = true,
  imageHeight,
}: PropsItem) => {
  const handleOnPress = () => {
    router.push(`/product/${data.id}`);
  };

  return (
    <Pressable
      onPress={handleOnPress}
      style={[
        styles.container,
        {
          borderRadius: borderRadius,
          width,
          height: height,
        },
      ]}>
      <View
        style={[
          styles.containerImage,
          {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            height: imageHeight,
          },
        ]}>
        <Image
          style={[
            styles.image,
            { borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius },
          ]}
          source={{ uri: data.image }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.body}>
        <View className="pl-2 pr-2 w-full flex flex-1">
          <View className={`flex w-full pt-1 pb-1`}>
            <View className="w-full flex flex-row justify-end">
              <BannerDescription title={data.title} />
            </View>
            <View className="w-full flex flex-row justify-end">
              <BannerTitle title={`${data.currencyDisplay} ${data.price}`} size="2xl" />
            </View>
          </View>
        </View>
        {displaySeller ? (
          <View
            className="flex flex-row flex-1 w-full bg-contrastPrimary-30"
            style={{
              borderBottomLeftRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            }}>
            <View className="w-full flex flex-row flex-1 pl-2 pr-2">
              <TitleWithAvatar
                src={{ uri: data.seller.image }}
                title={data.seller.name}
                id={data.seller.id}
                style={{
                  ...styles.seller,
                  borderBottomLeftRadius: borderRadius,
                  borderBottomRightRadius: borderRadius,
                }}
              />
            </View>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
};

export default BannerDetailedItem;
