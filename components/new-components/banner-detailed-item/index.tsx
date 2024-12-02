import React from 'react';

import { Image, View, Pressable, AnimatableNumericValue, DimensionValue } from 'react-native';
import styles from './styles';
import TitleWithAvatar from '../title-with-avatar';
import { router } from 'expo-router';
import BannerDescription from '../banner-description';
import BannerTitle from '../banner-title';
import { BannerDetailedComponent } from '@/models/banner-detailed-component';
import TitleSkeleton from '../title-skeleton';
import ParagraphSkeleton from '../paragraph-skeleton';

interface PropsItem {
  data: BannerDetailedComponent;
  width: DimensionValue;
  height: DimensionValue;
  imageHeight: DimensionValue;
  borderRadius: AnimatableNumericValue;
}

const BannerDetailedItem = ({ width, data, height, borderRadius, imageHeight }: PropsItem) => {
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
        {data.image ? (
          <Image
            style={[
              styles.image,
              { borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius },
            ]}
            source={{ uri: data.image }}
            resizeMode="cover"
          />
        ) : null}
      </View>
      <View style={styles.body}>
        <View className="pl-2 pr-2 w-full flex flex-1">
          <View className={`flex w-full pt-1 pb-1`}>
            <View className="w-full flex flex-row justify-end">
              {!data.isLoading ? <BannerDescription title={data.title} /> : <ParagraphSkeleton />}
            </View>
            <View className="w-full flex flex-row justify-end">
              {!data.isLoading ? (
                <BannerTitle title={`${data.currencyDisplay} ${data.price}`} size="2xl" />
              ) : (
                <TitleSkeleton size="2xl" />
              )}
            </View>
          </View>
        </View>
        {data.displaySeller ? (
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
                isLoading={data.isLoading}
              />
            </View>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
};

export default BannerDetailedItem;
