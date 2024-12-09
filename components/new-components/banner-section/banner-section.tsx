import colors from '@/styles/colors';
import React from 'react';

import { ColorValue, View } from 'react-native';

type Props = {
  children: React.ReactNode;
  backgroundColor?: ColorValue;
};

const BannerSection = ({ children, backgroundColor = colors.contrastPrimary[100] }: Props) => {
  return (
    <View className="flex flex-row justify-end flex-wrap w-full">
      <View
        className="flex w-auto max-w-full flex-row flex-wrap pl-2 pr-2 align-end justify-end border-b-2 border-b-contrastPrimary-80"
        style={{
          backgroundColor: backgroundColor,
        }}>
        {children}
      </View>
    </View>
  );
};

export default BannerSection;
