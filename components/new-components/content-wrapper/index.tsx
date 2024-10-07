import React from 'react';
import { Pressable, View, Text } from 'react-native';
import styles from './styles';
import '../../../global.css';
import useSpacing from '@/hooks/useSpacing';

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
  const { defaultHorizontalSpacing } = useSpacing();

  return (
    <View style={styles.container}>
      <View style={[styles.containerInner, { paddingHorizontal: defaultHorizontalSpacing }]}>
        {text && <Text className="text-xl text-contrastSecondary-950">{text}</Text>}
        {seeAll && (
          <Pressable onPress={handleOnSeeAll}>
            <Text className="text-lg text-contrastSecondary-950 underline italic">SEE ALL</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.containerChildren}>{children}</View>
    </View>
  );
};

export default ContentWrapper;
