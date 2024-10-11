import React from 'react';
import { Text } from 'react-native';
import '../../../global.css';
import styles from './styles';
type Props = {
  title: string;
};

const BannerDescription = ({ title }: Props) => {
  return (
    <Text ellipsizeMode="tail" className="text-md text-contrastSecondary-500" style={styles.text}>
      {title}
    </Text>
  );
};

export default BannerDescription;
