import React from 'react';

import { AnimatableNumericValue, DimensionValue, View } from 'react-native';
import styles from './styles';

interface Props {
  id: string;
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
}

const BannerSmallSkeleton = ({ id, width, height, borderRadius }: Props) => {
  return (
    <View
      key={`bannerSmallSlideSkeleton-${id}`}
      style={[
        styles.container,
        {
          height,
          width,
          borderRadius,
        },
      ]}>
      <View style={styles.content}>
        <View style={styles.section1}>
          <View style={styles.sectionContent} />
        </View>
        <View style={styles.section2}>
          <View style={styles.sectionContent} />
        </View>
      </View>
    </View>
  );
};

export default BannerSmallSkeleton;
