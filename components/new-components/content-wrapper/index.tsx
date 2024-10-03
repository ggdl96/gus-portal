import React from 'react';
import { Pressable, View, Text } from 'react-native';
import styles from './styles';
import '../../../global.css';

type Props = {
  text?: any;
  children: React.ReactNode;
  seeAll?: boolean;
  onSeeAll?: () => void;
};
const ContentWrapper = ({ text, children, seeAll, onSeeAll }: Props) => {
  const handleOnSeeAll = () => {
    if (typeof onSeeAll === 'function') onSeeAll();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        {text && <Text className="bg-white text-custom1">{text}</Text>}
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
