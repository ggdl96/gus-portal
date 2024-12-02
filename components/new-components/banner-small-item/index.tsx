import React from 'react';
import { Image, View, Pressable, GestureResponderEvent, DimensionValue } from 'react-native';
import styles from './styles';
import BannerTitle from '../banner-title';
import BannerSection from '../banner-section/banner-section';
import colors from '@/styles/colors';
import BannerSubTitle from '../banner-subtitle';
import { BannerSmallComponent } from '@/models/banner-small-component';
import TitleSkeleton from '../title-skeleton';
import SubTitleSkeleton from '../sub-title-skeleton';
import BannerSizes from '@/constants/banner-sizes';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  data: BannerSmallComponent;
  width: DimensionValue;
  height: DimensionValue;
};

const BannerSmallItem = ({ data, onPress, width, height }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          height,
          width,
        },
      ]}>
      {!data.isLoading && data.urlImage ? (
        <Image style={styles.image} source={{ uri: data.urlImage }} />
      ) : null}
      <View style={styles.content}>
        <View className="w-full justify-end flex flex-1">
          <BannerSection
            backgroundColor={data.isLoading ? colors.contrastPrimary[30] : colors.tertiary[650]}>
            {!data.isLoading ? (
              <BannerTitle title={data.title} size="3xl" />
            ) : (
              <TitleSkeleton size="3xl" width={BannerSizes.small.width / 1.1} align="right" />
            )}
          </BannerSection>
        </View>
        <View className="w-full flex flex-1">
          <BannerSection
            backgroundColor={data.isLoading ? colors.contrastPrimary[30] : colors.primary[650]}>
            {!data.isLoading ? (
              <BannerSubTitle title={`${data.views} views`} />
            ) : (
              <SubTitleSkeleton width={BannerSizes.small.width / 1.4} align="right" />
            )}
          </BannerSection>
        </View>
      </View>
    </Pressable>
  );
};

export default BannerSmallItem;
