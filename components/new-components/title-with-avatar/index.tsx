import React from 'react';
import { GestureResponderEvent, Pressable, View, ViewStyle } from 'react-native';
import styles from './styles';
import Avatar from '../avatar';
import BannerTitle from '../banner-title';
import { router } from 'expo-router';
import ParagraphSkeleton from '../paragraph-skeleton';

interface Props {
  title: string;
  src?: { uri: string };
  style?: ViewStyle;
  id?: string;
  shouldRedirect?: boolean;
  isLoading?: boolean;
}

const TitleWithAvatar = ({
  title,
  src,
  style,
  id,
  shouldRedirect = true,
  isLoading = false,
}: Props) => {
  const _handleOnPress = (e: GestureResponderEvent) => {
    if (id && shouldRedirect) {
      e.stopPropagation();
      router.navigate(`/seller/${id}`);
    }
  };

  return (
    <Pressable onPress={_handleOnPress} style={[styles.container, style]} disabled={isLoading}>
      <Avatar src={src} isLoading={isLoading} />
      <View className="flex flex-row flex-wrap  w-2/3 pl-1 pr-1">
        {!isLoading ? <BannerTitle title={title} /> : <ParagraphSkeleton />}
      </View>
    </Pressable>
  );
};

export default TitleWithAvatar;
