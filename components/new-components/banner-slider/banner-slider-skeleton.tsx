import React from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';

export const BannerSliderSkeleton = () => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.81;
  const containerHeight = containerWidth * 1.8;

  const data = [1, 2];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={true}>
        {data.map((object: any, index) => {
          return (
            <View key={`CreatorSlide-${index}`} style={{ flex: 1 }}>
              <View
                style={{
                  height: containerHeight,
                  width: containerWidth,
                  backgroundColor: '#292929',
                }}>
                <View
                  style={{
                    backgroundColor: '#292929',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: '10%',
                      width: '50%',
                      backgroundColor: '#232323',
                      borderRadius: 15,
                    }}
                  />
                  <View
                    style={{
                      height: '8%',
                      width: '70%',
                      backgroundColor: '#232323',
                      borderRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      height: '8%',
                      width: '70%',
                      backgroundColor: '#232323',
                      borderRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      height: '8%',
                      width: '30%',
                      backgroundColor: '#232323',
                      borderRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      height: '18%',
                      width: '80%',
                      backgroundColor: '#232323',
                      borderRadius: 15,
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
