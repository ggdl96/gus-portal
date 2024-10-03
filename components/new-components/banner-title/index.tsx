import React from 'react';
import { Text } from 'react-native';
import '../../../global.css';
type Props = {
  title: string;
};

const BannerTitle = ({ title }: Props) => {
  return (
    <Text numberOfLines={3} ellipsizeMode="tail" className="text-xl text-contrastSecondary-950">
      {title}
    </Text>
  );
};

export default BannerTitle;
