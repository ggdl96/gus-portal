import React from 'react';
import { AnimatableNumericValue, DimensionValue, View } from 'react-native';
import styles from './styles';
import Avatar from '../avatar';

interface Props {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
}

const BannerDetailedSliderSkeleton = ({ width, height, borderRadius }: Props) => {
  return (
    <View
      style={[
        styles.wrapper,
        {
          width,
          height,
          borderRadius,
        },
      ]}
      key={`bannerDetailedSliderSkeleton-${'index'}`}>
      <View style={styles.container}>
        <View style={styles.contentInside}>
          <Avatar />
          <View style={styles.row2}>
            <View style={styles.row2Line1} />
            <View style={styles.row2Line2} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BannerDetailedSliderSkeleton;
