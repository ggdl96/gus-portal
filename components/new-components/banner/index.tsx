import React, { ReactNode } from 'react';
import { Pressable, useWindowDimensions, View } from 'react-native';
import styles from './styles';

type Props = {
  source: { uri: string };
  redirectOnPress?: () => void;
  children?: ReactNode;
  width?: number;
};

const Banner = ({ source, children, redirectOnPress, width }: Props) => {
  const dimnesions = useWindowDimensions();
  const selectedWidth = dimnesions.width * 0.81;
  const selectedHeight = selectedWidth * 1.8;

  const handleOnPress = () => {
    if (redirectOnPress) {
      redirectOnPress();
    }
  };

  return (
    <Pressable
      onPress={handleOnPress}
      style={[styles.bannerWrapper, { width: selectedWidth, height: selectedHeight }]}>
      <View style={[styles.bannerWrapperInside]}>{children}</View>
    </Pressable>
  );
};

export default Banner;
