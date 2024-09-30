import React from 'react';
import { Pressable, View, Text } from 'react-native';
import styles from './styles';

type Props = {
  text?: any;
  children: React.ReactNode;
  seeAll?: boolean;
  onSeeAll?: () => void;
  top?: number;
  bottom?: number;
};
const ContentWrapper = ({ text, children, seeAll, onSeeAll, top, bottom }: Props) => {
  const handleOnSeeAll = () => {
    if (typeof onSeeAll === 'function') onSeeAll();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        {text && <Text style={styles.text}>{text}</Text>}
        {seeAll && (
          <Pressable onPress={handleOnSeeAll}>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.containerChildren}>{children}</View>
    </View>
  );
};

export default ContentWrapper;
