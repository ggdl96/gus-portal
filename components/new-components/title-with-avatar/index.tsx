import React from 'react';
import { GestureResponderEvent, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';
import Avatar from '../avatar';
import BannerTitle from '../banner-title';
import { router } from 'expo-router';

interface Props {
  title: string;
  src?: { uri: string };
  style?: ViewStyle;
  id?: string;
  shouldRedirect?: boolean;
}

const TitleWithAvatar = ({ title, src, style, id, shouldRedirect = true }: Props) => {
  const _handleOnPress = (e: GestureResponderEvent) => {
    if (id && shouldRedirect) {
      e.stopPropagation();
      router.navigate(`/seller/${id}`);
    }
  };

  return (
    <TouchableOpacity onPress={_handleOnPress}>
      <View style={[styles.container, style]}>
        <Avatar src={src} />
        <BannerTitle title={title} />
      </View>
    </TouchableOpacity>
  );
};

export default TitleWithAvatar;
