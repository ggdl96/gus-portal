import React, { useCallback, useEffect, useState } from 'react';
import { useWindowDimensions, View, Image, StyleSheet, Pressable } from 'react-native';

import '../../../global.css';
import { screens } from '@/styles/screens';
import BannerTitle from '@/components/new-components/banner-title';
import BannerSubTitle from '@/components/new-components/banner-subtitle';
import BannerDescription from '@/components/new-components/banner-description';
import LayoutBasic from '@/components/new-components/layout-basic';
import borders from '@/styles/borders';
import colors from '@/styles/colors';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import ProductVariants from '@/components/new-components/product-variants';

import { PRODUCT } from '../../../__mocks__/screens/product';
import ModalImge from '@/components/new-components/image-modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setProduct } from '@/features/productSlice';
import TitleSkeleton from '@/components/new-components/title-skeleton';
import ParagraphSkeleton from '@/components/new-components/paragraph-skeleton';
import SubTitleSkeleton from '@/components/new-components/sub-title-skeleton';
import { ProductVariantListData } from '@/models/product-variant-list-data';

const screenSizeChange: keyof typeof screens = 'md';

const variantListLoading: ProductVariantListData[] | (() => ProductVariantListData[]) = [
  {
    onSelectVariant: (index) => {},
    active: false,
    isLoading: true,
    id: 'v1',
    name: 'nv1',
    image: '',
  },
  {
    onSelectVariant: (index) => {},
    active: false,
    isLoading: true,
    id: 'v2',
    name: 'nv2',
    image: '',
  },
];

export default function Index() {
  const dimensions = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product.data);
  const [variantsToDisplay, setVariantsToDisplay] =
    useState<ProductVariantListData[]>(variantListLoading);
  const isLowerThanMD = dimensions.width < screens[screenSizeChange];
  const mainImageWidth = dimensions.width * (isLowerThanMD ? 1 : 0.5);
  const mainImageHeight = mainImageWidth * 0.6;

  const handeOnPressImage = () => {
    setModalVisible(true);
  };

  const handleToggleVisibility = () => {
    setModalVisible(false);
  };

  const handleOnSelectVariant = useCallback((index: number): void => {
    setSelectedVariant(index);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setProduct(PRODUCT));
      setVariantsToDisplay(
        PRODUCT?.variants.map((item, index) => ({
          ...item,
          onSelectVariant: handleOnSelectVariant,
          active: index === 0,
          isLoading: false,
        })),
      );
    }, 3221);
  }, [dispatch, handleOnSelectVariant]);

  useEffect(() => {
    if (!product.isLoading) {
      setVariantsToDisplay(
        product?.variants.map((item, index) => ({
          ...item,
          onSelectVariant: handleOnSelectVariant,
          active: selectedVariant === index,
          isLoading: false,
        })),
      );

      return () => {
        setVariantsToDisplay(variantListLoading);
      };
    }
  }, [dispatch, handleOnSelectVariant, product.isLoading, product?.variants, selectedVariant]);

  return (
    <LayoutBasic applyVerticalPadding>
      <View
        className={`w-full`}
        style={{
          minHeight: dimensions.height,
        }}>
        <View className={`w-full flex flex-col md:flex-row`}>
          <Pressable
            className={`flex w-full md:w-1/2 items-center md:pr-2`}
            onPress={handeOnPressImage}>
            {!product.isLoading && product.image ? (
              <Image
                style={[
                  styles.imageMain,
                  { height: mainImageHeight, borderRadius: borders.radius.small },
                ]}
                source={{
                  uri: product?.image,
                }}
                resizeMode="cover"
              />
            ) : (
              <View
                className="w-full bg-contrastPrimary-20"
                style={{ height: mainImageHeight, borderRadius: borders.radius.small }}
              />
            )}
          </Pressable>
          <View style={styles.sectionInfo} className="pt-6 flex">
            <View className="w-full flex flex-row">
              <View className="flex w-1/2">
                <View>
                  {!product.isLoading ? (
                    <BannerSubTitle
                      title={`${product.currencyDisplay}${product.price.toFixed(2)}`}
                    />
                  ) : (
                    <SubTitleSkeleton />
                  )}
                </View>
                <View className="pt-4">
                  {!product.isLoading ? (
                    <BannerTitle
                      title={`${product?.title ?? ''} - ${product?.variants[selectedVariant].name ?? ''}`}
                    />
                  ) : (
                    <TitleSkeleton />
                  )}
                </View>
              </View>
              <View className="flex flex-row justify-end w-1/2">
                <TitleWithAvatar
                  title={product?.seller.name ?? ''}
                  id={product?.id}
                  src={{ uri: product?.seller.image ?? '' }}
                  isLoading={product.isLoading}
                />
              </View>
            </View>
            <View>
              <ProductVariants variants={variantsToDisplay} isLoading={product.isLoading} />
            </View>
          </View>
        </View>
        <View className={`items-start flex w-full md:pt-6`}>
          <View className="flex flex-row pt-4 md:pt-0">
            {!product.isLoading ? <BannerSubTitle title={'Description'} /> : <SubTitleSkeleton />}
          </View>
          {!product.isLoading ? (
            <BannerDescription title={product?.description ?? ''} />
          ) : (
            <ParagraphSkeleton lines={8} />
          )}
        </View>
      </View>
      {!product.isLoading ? (
        <ModalImge
          url={product?.image ?? ''}
          visible={modalVisible}
          toggleVisibility={handleToggleVisibility}
        />
      ) : null}
    </LayoutBasic>
  );
}

const styles = StyleSheet.create({
  imageMain: {
    width: '100%',
    height: '100%',
  },
  sectionInfo: { flex: 1 },
  imageVariant: {
    borderRadius: borders.radius.small,
    borderWidth: 2,
    borderColor: colors.contrastPrimary[30],
  },
});
