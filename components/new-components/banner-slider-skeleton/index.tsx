import React from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import styles from './styles';

const BannerSliderSkeleton = () => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.81;
  const containerHeight = containerWidth * 1.8;

  const data = [1, 2];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {data.map((item) => {
          return (
            <View key={`BannerSliderSkeleton-${item}`} style={styles.containerItem}>
              <View
                style={[
                  styles.section1,
                  {
                    height: containerHeight,
                    width: containerWidth,
                  },
                ]}>
                <View style={styles.section2}>
                  <View style={styles.section2First} />
                  <View style={styles.section2Second} />
                  <View style={styles.section2Third} />
                  <View style={styles.section2Fourth} />
                  <View style={styles.section2Fifth} />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BannerSliderSkeleton;
