import React from 'react';
import { Image, Pressable, View, AnimatableNumericValue } from 'react-native';
import styles from './styles';
import BannerTitle from '../banner-title';
import BannerSection from '../banner-section/banner-section';
import colors from '@/styles/colors';
import { BannerMediumComponent } from '@/models/banner-medium-component/indext';
import TitleSkeleton from '../title-skeleton';
import BannerSizes from '@/constants/banner-sizes';

type Props = {
  onPress: () => void;
  data: BannerMediumComponent;
  borderRadius: AnimatableNumericValue;
};

const BannerMediumItem = ({ data, onPress, borderRadius }: Props) => {
  const source = { uri: data.image };

  return (
    <Pressable
      style={[
        styles.wrapper,
        {
          width: BannerSizes.medium.width,
          height: BannerSizes.medium.height,
          borderRadius,
        },
      ]}
      onPress={onPress}>
      {!data.isLoading && data.image ? (
        <Image style={styles.container} source={source} resizeMode={'cover'} />
      ) : null}
      <View style={styles.body}>
        <View className="w-full justify-end flex flex-1">
          <BannerSection
            backgroundColor={!data.isLoading ? colors.tertiary[650] : colors.contrastPrimary[30]}>
            {!data.isLoading ? (
              <BannerTitle title={data.categories.join(', ')} size="4xl" />
            ) : (
              <TitleSkeleton size="4xl" width={BannerSizes.medium.width / 1.4} />
            )}
          </BannerSection>
        </View>
        <View className="w-full flex flex-1">
          <BannerSection
            backgroundColor={!data.isLoading ? colors.secondary[650] : colors.contrastPrimary[30]}>
            {!data.isLoading ? (
              <BannerTitle title={data.text} />
            ) : (
              <TitleSkeleton width={BannerSizes.medium.width / 1.2} />
            )}
          </BannerSection>
        </View>
      </View>
    </Pressable>
  );
};

export default BannerMediumItem;
