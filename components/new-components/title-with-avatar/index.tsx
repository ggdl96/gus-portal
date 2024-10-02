import React from 'react';
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import styles from './styles';
import Avatar from '../avatar';

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
        <Text style={styles.title}>{title?.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TitleWithAvatar;
