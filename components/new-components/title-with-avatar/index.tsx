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

interface Props {
  title: string;
  src?: { uri: string };
  style?: ViewStyle;
  id?: string;
}

const TitleWithAvatar = ({ title, src, style, id }: Props) => {
  const _handleOnPressCreator = (e: GestureResponderEvent) => {
    if (id) {
      e.stopPropagation();
    }
  };

  return (
    <TouchableOpacity onPress={_handleOnPressCreator}>
      <View style={[styles.container, style]}>
        {typeof src === 'undefined' ? (
          <View style={styles.noImageDisplay} />
        ) : (
          <Image source={src} style={styles.image} />
        )}
        <Text style={styles.title}>{title?.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TitleWithAvatar;
