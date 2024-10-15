import React from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import styles from './styles';
import { screens } from '@/styles/screens';

interface Props {
  src?: { uri: string };
}

const Avatar = ({ src }: Props) => {
  const dimensions = useWindowDimensions();
  const size = dimensions.width > screens.lg ? 50 : dimensions.width * 0.1;
  const borderRadius = size / 6;

  return (
    <View style={{ paddingRight: 10 }}>
      {typeof src === 'undefined' ? (
        <View
          testID="avatarNoImage"
          style={[
            styles.noImageDisplay,
            {
              width: size,
              height: size,
              borderRadius,
            },
          ]}
        />
      ) : (
        <Image
          testID="avatarImage"
          source={src}
          style={[
            styles.image,
            {
              width: size,
              height: size,
              borderRadius,
            },
          ]}
          alt="avatar image"
        />
      )}
    </View>
  );
};

export default Avatar;
