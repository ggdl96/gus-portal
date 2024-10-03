import React, { ReactNode } from 'react';
import { Pressable, useWindowDimensions, View, Image } from 'react-native';
import styles from './styles';
import { screens } from '@/styles/screens';

type Props = {
  source: { uri: string };
  redirectOnPress?: () => void;
  children?: ReactNode;
};

const Banner = ({ source, children, redirectOnPress }: Props) => {
  const dimnesions = useWindowDimensions();
  const selectedWidth = (dimnesions.width > screens.lg ? 660 : dimnesions.width) * 0.8;
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
      <Image source={source} style={styles.image} resizeMode="cover" />
      <View style={[styles.bannerWrapperInside]}>{children}</View>
    </Pressable>
  );
};

export default Banner;
