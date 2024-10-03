import React from 'react';
import { GestureResponderEvent, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';
import Avatar from '../avatar';
import BannerTitle from '../banner-title';

interface Props {
  title: string;
  src?: { uri: string };
  style?: ViewStyle;
  id?: string;
}

const TitleWithAvatar = ({ title, src, style, id }: Props) => {
  const _handleOnPress = (e: GestureResponderEvent) => {
    if (id) {
      e.stopPropagation();
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
