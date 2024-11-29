import borders from '@/styles/borders';
import React from 'react';

import { View } from 'react-native';

const SubTitleSkeleton = ({ lines = 1, width = 280 }: { lines?: number; width?: number }) => {
  const lineList = Array.from({ length: lines }, (_value, index) => index);

  return (
    <>
      {lineList.map((item) => (
        <View className=" pt-1 pb-1 overflow-hidden" key={`titleLine_${item}`}>
          <View
            className="sub-title-skeleton bg-contrastPrimary-50"
            style={{
              width: width / (Number(item) + 1.2),
              height: 32,
              borderRadius: borders.radius.small,
            }}
          />
        </View>
      ))}
    </>
  );
};

export default SubTitleSkeleton;
