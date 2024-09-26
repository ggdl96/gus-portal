import React from 'react';

import TitleWithAvatar from '../../title-with-avatar/title-with-avatar';
import { View, Text } from 'react-native';
import { BannerTop } from '@/models/banner-top';

type Props = {
  data: BannerTop;
};

const FeaturedBannerContent = ({ data }: Props) => {
  const dataParsed = { ...data, customId: data.id };

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
        padding: 10,
      }}>
      <TitleWithAvatar
        title={dataParsed.owner.name}
        id={data.id}
        src={{ uri: dataParsed.owner.image }}
        style={{ justifyContent: 'center' }}
      />
      <Text
        numberOfLines={3}
        ellipsizeMode="tail"
        style={{
          fontWeight: '400',
          textAlign: 'center',
          color: '#f7f6f2',
          textTransform: 'uppercase',
        }}>
        {dataParsed.title}
      </Text>
    </View>
  );
};

export default FeaturedBannerContent;
