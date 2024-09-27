import React from 'react';
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
} from 'react-native';

interface Props {
  title: string;
  src?: { uri: string } | undefined;
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
      <View
        style={[
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 12,
          },
          style,
        ]}>
        {typeof src === 'undefined' ? (
          <View
            style={{
              paddingLeft: 3,
            }}
          />
        ) : (
          <Image
            source={src}
            style={{
              backgroundColor: 'blue',
              height: 32,
              width: 32,
              borderRadius: 16,
            }}
          />
        )}
        <Text
          style={{
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 14,
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#f7f6f2',
            paddingLeft: 3,
          }}>
          {title?.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TitleWithAvatar;
