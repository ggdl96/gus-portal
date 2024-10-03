import React from 'react';
import { Text } from 'react-native';
import '../../../global.css';
type Props = {
  title: string;
};

const BannerSubTitle = ({ title }: Props) => {
  return (
    <Text numberOfLines={3} ellipsizeMode="tail" className="text-lg text-contrastSecondary-900">
      {title}
    </Text>
  );
};

export default BannerSubTitle;
