import { BannerDetailed } from '@/models/banner-detailed';
import React from 'react';

import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  useWindowDimensions,
  Pressable,
  Text,
} from 'react-native';

interface PropsItem {
  full?: boolean;
  last?: boolean;
  width?: number;
  spacing?: number;
  horizontal?: boolean;
  data: BannerDetailed;
}

const BannerDetailedItem = ({ full, last, width, spacing, data }: PropsItem) => {
  const dimensions = useWindowDimensions();

  const getWidth = () => {
    let _width = Dimensions.get('window').width;

    if (width && !full) {
      return width;
    }

    return full ? _width * 0.9 : _width * 0.7;
  };

  const selectedWidth = getWidth();

  const getMargin = () => {
    if (spacing && !full) {
      return last ? 0 : spacing;
    }

    return full || last ? 0 : Dimensions.get('window').width * 0.05;
  };

  const selectedMargin = getMargin();

  const handleOnPress = () => {};

  const handleOnPressLowerSection = () => {};
  const CONTAINER_HEIGHT = dimensions.width * 0.73 * 0.51;

  return (
    <Pressable
      onPress={handleOnPress}
      style={[
        {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        },
        styles.container,
        { width: selectedWidth, marginRight: selectedMargin },
      ]}>
      <View
        style={{
          height: CONTAINER_HEIGHT,
          width: '100%',
          backgroundColor: '#333',
          borderRadius: 5,
        }}>
        <Image
          style={[styles.image, { width: full ? '100%' : selectedWidth }]}
          source={{ uri: data.image }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          borderBottomColor: 'red',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '100%',
          padding: 10,
          height: 100,
        }}>
        <TouchableOpacity onPress={handleOnPressLowerSection}>
          <Image
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#cecece04',
            }}
            source={{
              uri: data?.owner?.image,
            }}
          />
        </TouchableOpacity>
        <View style={styles.containerText}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
            }}>
            <TouchableOpacity onPress={handleOnPressLowerSection}>
              <Text
                numberOfLines={1}
                style={{
                  color: '#989898',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  fontWeight: '500',
                }}>
                {data?.owner?.name}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#989898',
                fontSize: 12,
                textTransform: 'uppercase',
                fontWeight: '500',
              }}>
              {'  |  '}
              {'- 0'}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: 40,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              width: '100%',
              paddingLeft: 8,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                textTransform: 'capitalize',
                width: '100%',
              }}
              numberOfLines={2}>
              {data.title ?? ''}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: { flex: 1 },
});

export default BannerDetailedItem;
