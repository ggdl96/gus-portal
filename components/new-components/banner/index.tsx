import React, { ReactNode } from 'react';
import { Pressable, View, Image } from 'react-native';
import styles from './styles';
import { BannerTopComponent } from '@/models/banner-top-component';
import BannerSizes from '@/constants/banner-sizes';

type Props = {
  onPress?: (id: string) => void;
  children?: ReactNode;
  testId?: string;
  item: BannerTopComponent;
};

const Banner = ({ children, onPress, testId = 'bannerId', item }: Props) => {
  const handleOnPress = () => {
    if (onPress) {
      onPress(item.id);
    }
  };

  const source = { uri: item.image };

  return (
    <Pressable
      onPress={handleOnPress}
      style={[
        styles.bannerWrapper,
        {
          width: BannerSizes.highlightMain.width,
          height: BannerSizes.highlightMain.height,
        },
      ]}
      testID={testId}
      disabled={item.isLoading}>
      {!item.isLoading && item.image ? (
        <Image source={source} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={styles.image} />
      )}
      <View style={[styles.bannerWrapperInside]}>{children}</View>
    </Pressable>
  );
};

export default Banner;
