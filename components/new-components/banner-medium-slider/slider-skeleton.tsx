import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import DefaultList from '../default-list';

export const SlideSkeleton = () => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.53;
  const containerHeight = containerWidth * 1.5;

  const data = [1, 2];

  return (
    <View style={{ flex: 1 }}>
      <DefaultList
        horizontal={true}
        data={data}
        renderItem={() => {
          return (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: containerWidth,
                height: containerHeight,
              }}>
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
        }}></DefaultList>
    </View>
  );
};
