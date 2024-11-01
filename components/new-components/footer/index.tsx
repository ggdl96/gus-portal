import React, { useState } from 'react';

import { Pressable, View, ViewStyle } from 'react-native';
import BannerDescription from '@/components/new-components/banner-description';
import colors from '@/styles/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useSpacing from '@/hooks/useSpacing';
import ContactModal from '../contact-modal';

interface Props {
  style?: ViewStyle;
}

export default function Footer({ style }: Props) {
  const insets = useSafeAreaInsets();
  const spacing = useSpacing();
  const [contactVisible, setContactVisible] = useState(false);

  const handleOnPressContact = () => {
    setContactVisible(true);
  };

  return (
    <View
      className="flex flex-row border-t-2 border-t-contrastPrimary-90 w-full p-2 bg-primary-400 flex-wrap justify-center"
      style={[
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left + spacing.defaultHorizontalSpacing,
          paddingRight: insets.right + spacing.defaultHorizontalSpacing,
        },
        style,
      ]}>
      <View className="w-full lg:w-3/4 flex flex-row flex-wrap justify-center">
        <View className="pr-4 w-1/3 lg:w-1/2 flex flex-row align-middle justify-between">
          <BannerDescription title="Gus Portal" color={colors.contrastPrimary[50]} />
          <View className="border-r-primary-300 border-r-2 lg:border-r-0" style={{ height: 24 }} />
        </View>
        <Pressable
          className="pl-2 w-1/3 lg:w-1/2 justify-center lg:justify-end flex flex-row"
          onPress={handleOnPressContact}>
          <BannerDescription title="Conctact" color={colors.contrastPrimary[50]} />
        </Pressable>
        <View className="pl-4 flex flex-row flex-wrap w-1/3 lg:w-full justify-end">
          <View
            className="border-l-primary-300 border-l-2 lg:border-l-0 flex flex-1"
            style={{ height: 24 }}
          />
          <BannerDescription title="De Luca, Gustavo Gabriel" color={colors.contrastPrimary[50]} />
        </View>
      </View>
      <ContactModal
        visible={contactVisible}
        toggleVisibility={() => {
          setContactVisible(false);
        }}
      />
    </View>
  );
}
