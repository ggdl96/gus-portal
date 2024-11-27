import React from 'react';

import styles from './styles';
import { View } from 'react-native';
import TitleWithAvatar from '../title-with-avatar';
import BannerTitle from '../banner-title';
import BannerSection from '../banner-section/banner-section';
import colors from '@/styles/colors';
import { BannerTopComponent } from '@/models/banner-top-component';
import TitleSkeleton from '../title-skeleton';

type Props = {
  data: BannerTopComponent;
};

const FeaturedBannerContent = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
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
        <View className="flex flex-row justify-end flex-1 w-full">
          <View className="max-w-full">
            <View className="bg-contrastPrimary-30 pl-2 pr-2 flex max-w-full">
              <TitleWithAvatar
                title={data.seller.name}
                id={data.id}
                src={{
                  uri: data.seller.image,
                }}
                style={styles.titleWithAvatar}
                isLoading={data.isLoading}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeaturedBannerContent;
