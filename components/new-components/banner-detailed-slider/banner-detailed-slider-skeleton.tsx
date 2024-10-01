import React from 'react';
import { styleSkeletonSlider } from './banner-detailed-slider-skeleton.styles';
import DefaultList from '../default-list';
import { useWindowDimensions, View } from 'react-native';

export const ListSkeleton = () => {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.733;
  const containerHeight = containerWidth * 0.75;

  const data = [1, 2, 3];

  return (
    <View style={styleSkeletonSlider.container}>
      <DefaultList
        horizontal={true}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: containerWidth,
                height: containerHeight,
              }}
              key={`bannerDetailedSliderSkeleton-${index}`}>
              <View
                style={{
                  height: containerHeight,
                  width: containerWidth,
                  justifyContent: 'flex-end',
                  backgroundColor: '#232323',
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    padding: '2%',
                    backgroundColor: '#292929',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: '#232323',
                      borderRadius: 50,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: '#292929',
                      justifyContent: 'space-evenly',
                      width: '80%',
                      paddingLeft: '3%',
                      flexDirection: 'column',
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
                        height: '20%',
                        backgroundColor: '#232323',
                        width: '100%',
                        borderRadius: 15,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
