import React from 'react';

import styles from './styles';
import { View, Text } from 'react-native';
import { BannerTop } from '@/models/banner-top';
import TitleWithAvatar from '../title-with-avatar';

type Props = {
  data: BannerTop;
};

const FeaturedBannerContent = ({ data }: Props) => {
  const dataParsed = { ...data, customId: data.id };

  return (
    <View style={styles.container}>
      <TitleWithAvatar
        title={dataParsed.owner.name}
        id={data.id}
        src={{ uri: dataParsed.owner.image }}
        style={styles.titleWithAvatar}
      />
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
        {dataParsed.title}
      </Text>
    </View>
  );
};

export default FeaturedBannerContent;
