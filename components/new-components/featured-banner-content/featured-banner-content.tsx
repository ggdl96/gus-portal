import React from 'react';

import styles from './styles';
import { View } from 'react-native';
import { BannerTop } from '@/models/banner-top';
import TitleWithAvatar from '../title-with-avatar';
import BannerTitle from '../banner-title';

type Props = {
  data: BannerTop;
};

const FeaturedBannerContent = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TitleWithAvatar
          title={data.owner.name}
          id={data.id}
          src={{
            uri: data.owner.image,
          }}
          style={styles.titleWithAvatar}
        />
        <BannerTitle title={data.title} />
      </View>
    </View>
  );
};

export default FeaturedBannerContent;
