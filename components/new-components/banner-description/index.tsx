import React from 'react';
import { Text } from 'react-native';
import '../../../global.css';
type Props = {
  title: string;
};

const BannerDescription = ({ title }: Props) => {
  return (
    <Text ellipsizeMode="tail" className="text-md text-contrastSecondary-500">
      {title}
    </Text>
  );
};

export default BannerDescription;
