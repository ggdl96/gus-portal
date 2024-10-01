import React from 'react';

import styles from './styles';
import { View, Text, Image } from 'react-native';
import { BannerTop } from '@/models/banner-top';
import TitleWithAvatar from '../title-with-avatar';

type Props = {
  data: BannerTop;
};

const FeaturedBannerContent = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <TitleWithAvatar
          title={data.owner.name}
          id={data.id}
          src={{
            uri: data.owner.image,
          }}
          style={styles.titleWithAvatar}
        />
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
          {data.title}
        </Text>
      </View>
    </View>
  );
};

export default FeaturedBannerContent;
