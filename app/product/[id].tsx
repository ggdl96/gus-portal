import React, { useState } from 'react';
import { useWindowDimensions, View, Image, StyleSheet, Pressable } from 'react-native';

import '../../global.css';
import { screens } from '@/styles/screens';
import BannerTitle from '@/components/new-components/banner-title';
import BannerSubTitle from '@/components/new-components/banner-subtitle';
import BannerDescription from '@/components/new-components/banner-description';
import LayoutBasic from '@/components/new-components/layout-basic';
import borders from '@/styles/borders';
import colors from '@/styles/colors';
import TitleWithAvatar from '@/components/new-components/title-with-avatar';
import ProductVariants from '@/components/new-components/product-variants';

import { PRODUCT } from '../../__mocks__/screens/product';
import ModalImge from '@/components/new-components/image-modal';

const screenSizeChange: keyof typeof screens = 'md';

export default function Index() {
  const dimensions = useWindowDimensions();
  const [modalVisible, setModalVisble] = useState<boolean>(false);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const isLowerThanMD = dimensions.width < screens[screenSizeChange];
  const mainImageWidth = dimensions.width * (isLowerThanMD ? 1 : 0.5);
  const mainImageHeight = mainImageWidth * 0.6;

  const handeOnPressImage = () => {
    setModalVisble(true);
  };

  const handleToggleVisibility = () => {
    setModalVisble(false);
  };

  const handleOnSelectVariant = (index: number) => {
    setSelectedVariant(index);
  };

  const variantsToDisplay = PRODUCT.variants.map((item, index) => ({
    ...item,
    onSelectVariant: handleOnSelectVariant,
    active: selectedVariant === index,
  }));

  return (
    <LayoutBasic applyVerticalPadding>
      <View className={`w-full flex flex-col md:flex-row`}>
        <Pressable
          className={`flex w-full md:w-1/2 items-center md:pr-6`}
          onPress={handeOnPressImage}>
          <Image
            style={[
              styles.imageMain,
              { height: mainImageHeight, borderRadius: borders.radius.small },
            ]}
            source={{
              uri: PRODUCT.image,
            }}
            resizeMode="cover"
          />
        </Pressable>
        <View style={styles.sectionInfo} className="pt-6 flex">
          <View className="w-full flex flex-row">
            <View className="flex w-1/2">
              <View>
                <BannerSubTitle title={'$1234.00'} />
              </View>
              <View className="pt-4">
                <BannerTitle
                  title={`${PRODUCT.title} - ${PRODUCT.variants[selectedVariant].name}`}
                />
              </View>
            </View>
            <View className="flex flex-row justify-end w-1/2">
              <TitleWithAvatar
                title={PRODUCT.seller.name}
                id={PRODUCT.id}
                src={{ uri: PRODUCT.seller.image }}
              />
            </View>
          </View>
          <View>
            <ProductVariants variants={variantsToDisplay} />
          </View>
        </View>
      </View>
      <View className={`items-start flex w-full md:pt-6`}>
        <BannerSubTitle title={'Description'} />
        <BannerDescription title={PRODUCT.description} />
      </View>
      <ModalImge
        url={PRODUCT.image}
        visible={modalVisible}
        toggleVisibility={handleToggleVisibility}
      />
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
