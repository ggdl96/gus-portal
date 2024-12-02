import { ContentAlignMapper } from '@/constants/skeleton';
import { ContentAlign } from '@/models/skeleton-text';
import borders from '@/styles/borders';
import React from 'react';

import { View } from 'react-native';

const SubTitleSkeleton = ({
  lines = 1,
  width = 280,
  align = 'left',
}: {
  lines?: number;
  width?: number;
  align?: ContentAlign;
}) => {
  const lineList = Array.from({ length: lines }, (_value, index) => index);

  return (
    <>
      {lineList.map((item) => (
        <View
          className={`pt-1 pb-1 overflow-hidden ${ContentAlignMapper[align]}`}
          key={`titleLine_${item}`}>
          <View
            className="sub-title-skeleton bg-contrastPrimary-80"
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
