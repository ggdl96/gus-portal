import React from 'react';
import { useWindowDimensions, View, Image } from 'react-native';

import '../../global.css';
import { screens } from '@/styles/screens';
import BannerTitle from '@/components/new-components/banner-title';
import BannerSubTitle from '@/components/new-components/banner-subtitle';
import BannerDescription from '@/components/new-components/banner-description';
import LayoutBasic from '@/components/new-components/layout-basic';

export default function Index() {
  const dimensions = useWindowDimensions();
  const screenSizeChange: keyof typeof screens = 'md';

  const isLowerThanMD = dimensions.width < screens[screenSizeChange];
  const width = dimensions.width * (isLowerThanMD ? 1 : 0.5);
  const height = width * 0.6;
  const sharedPadding = 'p-6';

  return (
    <LayoutBasic>
      <View className={`w-full bg-red ${screenSizeChange}:flex-row`}>
        <View
          style={{ height }}
          className={`flex w-${isLowerThanMD ? 'full' : '1/2'} items-center justify-center ${sharedPadding}`}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={{
              uri: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 1 }} className={`${sharedPadding}`}>
          <View>
            <BannerSubTitle title={'$1234'} />
          </View>
          <View>
            <BannerTitle title={'Title of product'} />
          </View>
          <View>
            <BannerTitle title={'Variants'} />
          </View>
        </View>
      </View>
      <View className={`items-start flex w-full ${sharedPadding}`}>
        <BannerSubTitle title={'Description'} />
        <BannerDescription title={'some description of this'} />
      </View>
    </LayoutBasic>
  );
}
