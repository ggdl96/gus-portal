import React from 'react';
import { ColorValue, Text } from 'react-native';
import '../../../global.css';
import styles from './styles';
import colors from '@/styles/colors';

type Props = {
  title: string;
  color?: ColorValue;
};

const BannerDescription = ({ title, color = colors.contrastSecondary[500] }: Props) => {
  return (
    <Text
      ellipsizeMode="tail"
      className="text-md"
      style={[
        styles.text,
        {
          color,
        },
      ]}>
      {title}
    </Text>
  );
};

export default BannerDescription;
