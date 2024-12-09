import React, { ReactNode } from 'react';

import { View, Text, ViewStyle, TextStyle } from 'react-native';
import styles from './styles';

type Props = {
  title?: string;
  children?: ReactNode;
  lineStyles?: TextStyle;
  connectStyles?: ViewStyle;
  containerStyles?: ViewStyle;
};

const InfoContainer = ({
  title = '',
  lineStyles,
  connectStyles,
  containerStyles,
  children,
}: Props) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <View style={styles.containerHeader}>
        <View style={styles.line} />
        <View className="pl-2 pr-2" style={[styles.connect, connectStyles]}>
          <Text numberOfLines={1} style={[styles.containerHeaderTitle, lineStyles]}>
            {title}
          </Text>
        </View>
        <View style={styles.line} />
      </View>
      <View className="p-4">{children}</View>
    </View>
  );
};

export default InfoContainer;
