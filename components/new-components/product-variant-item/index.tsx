import React from 'react';
import {
  useWindowDimensions,
  View,
  Image,
  Text,
  Pressable,
  GestureResponderEvent,
} from 'react-native';

import '../../../global.css';
import { screens } from '@/styles/screens';
import styles from './styles';
import { ProductVariantListData } from '@/models/product-variant-list-data';

const ProductVariantItem = ({ item, index }: { item: ProductVariantListData; index: number }) => {
  const dimensions = useWindowDimensions();
  const screenSizeChange: keyof typeof screens = 'md';

  const isLowerThanMD = dimensions.width < screens[screenSizeChange];
  const variantImageSize = dimensions.width * (isLowerThanMD ? 0.14 : 0.06);

  const handleOnPress = (event: GestureResponderEvent) => {
    item.onSelectVariant(index);
  };

  return (
    <Pressable onPress={handleOnPress}>
      <Image
        source={{ uri: item.image }}
        style={[
          styles.imageVariant,
          item.active ? styles.borderColorActive : styles.borderColorDefault,
          {
            width: variantImageSize,
            height: variantImageSize,
          },
        ]}
      />
      <View className="pt-2">
        <Text className="color-contrastSecondary-700 text-sm text-center">{item.name}</Text>
      </View>
    </Pressable>
  );
};

export default ProductVariantItem;
