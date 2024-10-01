import { BannerMedium } from '@/models/banner-medium/indext';
import React from 'react';
import { Image, Pressable, StyleSheet, useWindowDimensions, View, Text } from 'react-native';

type Props = {
  onPress: Function;
  data: BannerMedium;
  source: {
    uri: string;
  };
  width: number;
  spacing: number;
  last: boolean;
};

const MediumSlide = ({ data, source, onPress, width, spacing, last }: Props) => {
  const dimensions = useWindowDimensions();
  const CONTAINER_WIDTH = dimensions.width * 0.53;
  const CONTAINER_HEIGHT = CONTAINER_WIDTH * 1.5;

  return (
    <Pressable
      style={[
        {
          width,
          marginRight: last ? 0 : spacing,
          borderRadius: 3,
          overflow: 'hidden',
          height: CONTAINER_HEIGHT,
        },
      ]}
      onPress={onPress}>
      <Image
        style={styles.container}
        source={source}
        resizeMode={'cover'}
        width={width}
        height={CONTAINER_HEIGHT}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
          padding: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '30%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',

            backgroundColor: '#B2BEB5',
          }}>
          <Text
            style={{
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 12,
              textAlign: 'center',
              height: 14,
              textTransform: 'uppercase',
              color: '#f0e6cc',
              width: '100%',
            }}>
            {data.categories.join(', ')}
          </Text>
          <Text
            style={{
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 8,
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
            textBreakStrategy={'simple'}
            adjustsFontSizeToFit
            numberOfLines={2}>
            {data.text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { position: 'absolute', width: '100%', height: '100%', borderRadius: 3 },
  gradient: { flex: 1 },
});

export default MediumSlide;
