import React from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import styles from './styles';

interface Props {
  src?: { uri: string };
}

const Avatar = ({ src }: Props) => {
  const dimensions = useWindowDimensions();
  const size = dimensions.width * 0.1;

  return (
    <View style={{ paddingRight: 10 }}>
      {typeof src === 'undefined' ? (
        <View
          style={[
            styles.noImageDisplay,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      ) : (
        <Image
          source={src}
          style={[
            styles.image,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      )}
    </View>
  );
};

export default Avatar;
