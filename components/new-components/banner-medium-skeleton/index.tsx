import React from 'react';
import { AnimatableNumericValue, DimensionValue, View } from 'react-native';
import styles from './styles';

interface Props {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
}

const MediumSlideSkeleton = ({ width, height, borderRadius }: Props) => {
  return (
    <View style={[styles.wrapper, { width, height, borderRadius }]}>
      <View style={styles.container}>
        <View style={styles.row1}>
          <View style={styles.row1Line1}>
            <View style={styles.line} />
          </View>
          <View style={styles.row1Line2}>
            <View style={styles.line} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MediumSlideSkeleton;
