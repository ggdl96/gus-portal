import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';
import '../../../global.css';
import useSpacing from '@/hooks/useSpacing';
import BannerSubTitle from '../banner-subtitle';

type Props = {
  text?: any;
  children: React.ReactNode;
  seeAll?: boolean;
  onSeeAll?: () => void;
};

const ContentWrapper = ({ text, children, seeAll, onSeeAll }: Props) => {
  const handleOnSeeAll = () => {
    if (onSeeAll) {
      onSeeAll();
    }
  };
  const { defaultHorizontalSpacing } = useSpacing();

  return (
    <View style={styles.container}>
      <View style={[styles.containerInner, { paddingHorizontal: defaultHorizontalSpacing }]}>
        {text ? <BannerSubTitle title={text} /> : null}
        {seeAll ? (
          <Pressable onPress={handleOnSeeAll}>
            <BannerSubTitle title="SEE ALL" />
          </Pressable>
        ) : null}
      </View>
      <View style={styles.containerChildren}>{children}</View>
    </View>
  );
};

export default ContentWrapper;
