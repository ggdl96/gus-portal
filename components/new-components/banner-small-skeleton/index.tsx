import React from 'react';

import { ScrollView, useWindowDimensions, View } from 'react-native';
import styles from './styles';

export const BannerSmallSkeleton = () => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.416;
  const containerHeight = containerWidth * 1.5;

  const data = [1, 2, 3];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={true}>
        {data.map((item) => {
          return (
            <View
              key={`bannerSmallSlideSkeleton-${item}`}
              style={[
                styles.container,
                {
                  height: containerHeight,
                  width: containerWidth,
                },
              ]}>
              <View style={styles.content}>
                <View style={styles.section1} />
                <View style={styles.section2} />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
