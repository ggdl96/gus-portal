import React from 'react';
import { useWindowDimensions, View, Image, Text } from 'react-native';

import '../../../global.css';
import { screens } from '@/styles/screens';
import { ProductVariant } from '@/models/product-variant';
import styles from './styles';

const ProductVariantItem = ({ item }: { item: ProductVariant }) => {
  const dimensions = useWindowDimensions();
  const screenSizeChange: keyof typeof screens = 'md';

  const isLowerThanMD = dimensions.width < screens[screenSizeChange];
  const variantImageSize = dimensions.width * (isLowerThanMD ? 0.14 : 0.06);

  return (
    <View>
      <Image
        source={{ uri: item.image }}
        style={[
          styles.imageVariant,
          {
            width: variantImageSize,
            height: variantImageSize,
          },
        ]}
      />
      <View className="pt-2">
        <Text className="color-contrastSecondary-700 text-sm text-center">{item.name}</Text>
      </View>
    </View>
  );
};

export default ProductVariantItem;
