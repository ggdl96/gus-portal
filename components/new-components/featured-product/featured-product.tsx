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
      <BannerSection backgroundColor={colors.tertiary[650]}>
        <BannerTitle title={data.title} size="4xl" />
      </BannerSection>
      <BannerSection backgroundColor={colors.contrastPrimary[30]}>
        <BannerSubTitle title={data.subTitle} />
      </BannerSection>
    </View>
  );
};

export default FeaturedProduct;
