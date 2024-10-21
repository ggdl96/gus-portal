import { BannerMedium } from '@/models/banner-medium/indext';
import React from 'react';
import { Image, Pressable, View, AnimatableNumericValue, DimensionValue } from 'react-native';
import styles from './styles';
import BannerTitle from '../banner-title';
import BannerSection from '../banner-section/banner-section';
import colors from '@/styles/colors';

type Props = {
  onPress: () => void;
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
        <View className="w-full justify-end flex flex-1">
          <BannerSection backgroundColor={colors.tertiary[650]}>
            <BannerTitle title={data.categories.join(', ')} size="4xl" />
          </BannerSection>
        </View>
        <View className="w-full flex flex-1">
          <BannerSection backgroundColor={colors.secondary[650]}>
            <BannerTitle title={data.text} />
          </BannerSection>
        </View>
      </View>
    </Pressable>
  );
};

export default BannerMediumItem;
