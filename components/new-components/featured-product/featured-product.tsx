import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import BannerTitle from '../banner-title';
import BannerSubTitle from '../banner-subtitle';
import BannerSection from '../banner-section/banner-section';
import colors from '@/styles/colors';
import { BannerTopComponent } from '@/models/banner-top-component';
import TitleSkeleton from '../title-skeleton';
import ParagraphSkeleton from '../paragraph-skeleton';

type Props = {
  data: BannerTopComponent;
};

const FeaturedProduct = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View className="w-full justify-end flex flex-1">
        <BannerSection
          backgroundColor={!data.isLoading ? colors.tertiary[650] : colors.contrastPrimary[30]}>
          {!data.isLoading ? (
            <BannerTitle title={data.title} size="4xl" />
          ) : (
            <TitleSkeleton size="4xl" lines={2} />
          )}
        </BannerSection>
      </View>
      <View className="w-full flex flex-row justify-end flex-1">
        <View className="w-full">
          <BannerSection backgroundColor={colors.contrastPrimary[30]}>
            {!data.isLoading ? (
              <BannerSubTitle title={data.subTitle} />
            ) : (
              <ParagraphSkeleton lines={3} />
            )}
          </BannerSection>
        </View>
      </View>
    </View>
  );
};

export default FeaturedProduct;
