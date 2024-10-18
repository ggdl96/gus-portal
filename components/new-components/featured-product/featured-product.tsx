import { BannerTop } from '@/models/banner-top';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import BannerTitle from '../banner-title';
import BannerSubTitle from '../banner-subtitle';
import BannerSection from '../banner-section/banner-section';
import colors from '@/styles/colors';

type Props = {
  data: BannerTop;
};

const FeaturedProduct = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View className="w-full justify-end flex flex-1">
        <BannerSection backgroundColor={colors.tertiary[650]}>
          <BannerTitle title={data.title} size="4xl" />
        </BannerSection>
      </View>
      <View className="w-full flex flex-row justify-end flex-1">
        <View className="w-full">
          <BannerSection backgroundColor={colors.contrastPrimary[30]}>
            <BannerSubTitle title={data.subTitle} />
          </BannerSection>
        </View>
      </View>
    </View>
  );
};

export default FeaturedProduct;
