import React from 'react';
import { View } from 'react-native';

import '../../../global.css';
import BannerTitle from '@/components/new-components/banner-title';
import DefaultList from '../default-list';
import ProductVariantItem from '../product-variant-item';
import { ProductVariantListData } from '@/models/product-variant-list-data';

interface Props {
  variants: ProductVariantListData[];
}
const RenderItem = ({ item, index }: { item: ProductVariantListData; index: number }) => (
  <ProductVariantItem item={item} index={index} />
);

const ProductVariants = ({ variants }: Props) => {
  const keyExtractor = (data: ProductVariantListData): string => `productVariants_${data.id}`;

  return (
    <View className="pt-6">
      <BannerTitle title={'Variants'} />
      <View className="pt-4 flex w-full">
        <DefaultList
          horizontal
          data={variants}
          renderItem={RenderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default ProductVariants;
