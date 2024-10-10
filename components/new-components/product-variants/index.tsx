import React from 'react';
import { View } from 'react-native';

import '../../../global.css';
import BannerTitle from '@/components/new-components/banner-title';
import DefaultList from '../default-list';
import ProductVariantItem from '../product-variant-item';
import { ProductVariant } from '@/models/product-variant';

const ProductVariants = ({ variants }: { variants: ProductVariant[] }) => {
  return (
    <View className="pt-6">
      <BannerTitle title={'Variants'} />
      <View className="pt-4 flex w-full">
        <DefaultList
          horizontal
          data={variants}
          renderItem={({ item }) => <ProductVariantItem item={item} />}
        />
      </View>
    </View>
  );
};

export default ProductVariants;
