import React from 'react';
import { Image, View, Text, Pressable, GestureResponderEvent } from 'react-native';
import { BannerSmall } from '@/models/banner-small';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  data: BannerSmall;
  containerHeight: number;
  containerWidth: number;
};

const BannerSmallComponent = ({ data, onPress, containerHeight, containerWidth }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        height: containerHeight,
        width: containerWidth,
        borderRadius: 5,
        backgroundColor: '#B2BEB5',
      }}>
      <Image
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          borderRadius: 5,
        }}
        source={{ uri: '' }}
      />
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
          paddingHorizontal: 10,
          paddingVertical: 2,
          borderRadius: 5,
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: '#B2BEB5',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-end',
              flex: 1,
              paddingBottom: 2,
              display: 'flex',
            }}>
            <Text
              numberOfLines={3}
              style={{
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 16,
                color: 'white',
                width: '100%',
              }}>
              {data.title}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-start',
              paddingBottom: 6,
            }}>
            <Text
              style={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 12,
                textTransform: 'uppercase',
                color: '#ffffff',
                width: ' 100%',
              }}>
              {data.views} VIEWS
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default BannerSmallComponent;
