import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

interface Props {
  src?: { uri: string };
  isLoading?: boolean;
}

const Avatar = ({ src, isLoading }: Props) => {
  const size = 54;
  const borderRadius = size / 6;

  return (
    <View className="pr-4">
      {isLoading || typeof src === 'undefined' ? (
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
