import borders from '@/styles/borders';
import React from 'react';

import { View } from 'react-native';

const mapper = {
  xl: 40,
  '2xl': 42,
  '3xl': 44,
  '4xl': 46,
} as const;

type Sizes = keyof typeof mapper;

const TitleSkeleton = ({
  size = 'xl',
  lines = 1,
  width = 280,
}: {
  size?: Sizes;
  lines?: number;
  width?: number;
}) => {
  const lineList = Array.from({ length: lines }, (_value, index) => index);

  return (
    <>
      {lineList.map((item) => (
        <View className=" pt-1 pb-1 overflow-hidden" key={`titleLine_${item}`}>
          <View
            className="title-skeleton bg-contrastPrimary-80"
            style={{
              width: width / (Number(item) + 1.2),
              height: mapper[size],
              borderRadius: borders.radius.small,
            }}
          />
        </View>
      ))}
    </>
  );
};

export default TitleSkeleton;
