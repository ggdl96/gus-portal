import React from 'react';
import { Text } from 'react-native';
import '../../../global.css';
import styles from './styles';
type Props = {
  title: string;
};

const BannerSubTitle = ({ title }: Props) => {
  return (
    <Text
      numberOfLines={3}
      ellipsizeMode="tail"
      className="text-lg text-contrastSecondary-900"
      style={styles.text}>
      {title}
    </Text>
  );
};

export default BannerSubTitle;
