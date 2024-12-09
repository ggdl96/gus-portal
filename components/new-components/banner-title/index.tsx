import React from 'react';
import { Text } from 'react-native';
import '../../../global.css';
import styles from './styles';

const mappper = {
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-5xl',
} as const;

type FontSizes = keyof typeof mappper;

type Props = {
  title: string;
  size?: FontSizes;
};

const BannerTitle = ({ title, size = 'xl' }: Props) => {
  return (
    <Text
      numberOfLines={3}
      ellipsizeMode="tail"
      className={`text-contrastSecondary-950 leading-normal ${mappper[size]}`}
      style={styles.text}>
      {title}
    </Text>
  );
};

export default BannerTitle;
