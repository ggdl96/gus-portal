import React from 'react';

import { ScrollView, useWindowDimensions, View } from 'react-native';

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
              key={`bannerSmallSlide-${item}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: dimensions.width * 0.81,
                height: 100,
              }}>
              <View
                style={{
                  height: containerHeight,
                  width: containerWidth,
                  backgroundColor: '#292929',
                }}>
                <View style={{ backgroundColor: '#292929' }}>
                  <View
                    style={{
                      height: '20%',
                      width: '50%',
                      backgroundColor: '#232323',
                      borderRadius: 15,
                    }}
                  />
                  <View
                    style={{
                      height: '15%',
                      width: '70%',
                      backgroundColor: '#232323',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
