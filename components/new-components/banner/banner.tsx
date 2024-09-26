import React, { ReactNode } from 'react';
import { Pressable, useWindowDimensions, View } from 'react-native';

type Props = {
  source: { uri: string };
  redirectOnPress?: () => void;
  children?: ReactNode;
  width?: number;
};

const Banner = ({ source, children, redirectOnPress, width }: Props) => {
  const dimnesions = useWindowDimensions();
  const selectedWidth = width ?? dimnesions.width * 0.81;
  const selectedHeight = selectedWidth * 1.8;

  const handleOnPress = () => {
    if (redirectOnPress) {
      redirectOnPress();
    }
  };

  return (
    <Pressable onPress={handleOnPress}>
      <View
        style={[
          {
            width: selectedWidth,
            height: selectedHeight,
            borderRadius: 5,
            overflow: 'hidden',
            backgroundColor: 'gray',
          },
        ]}>
        {children}
      </View>
    </Pressable>
  );
};

export default Banner;
