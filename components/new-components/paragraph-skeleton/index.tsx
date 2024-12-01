import borders from '@/styles/borders';
import React from 'react';

import { View } from 'react-native';

const ParagraphSkeleton = ({ lines = 1 }: { lines?: number }) => {
  const lineList = Array.from({ length: lines }, (_value, index) => index);

  return (
    <>
      {lineList.map((item) => (
        <View
          className=" pt-1 pb-1 flex flex-row-reverse w-full  overflow-hidden"
          key={`titleLine_${item}`}>
          <View
            className="paragraph-skeleton bg-contrastPrimary-80"
            style={{
              width: 320 / (Number(item) + 1),
              height: 22,
              borderRadius: borders.radius.small,
            }}
          />
        </View>
      ))}
    </>
  );
};

export default ParagraphSkeleton;
