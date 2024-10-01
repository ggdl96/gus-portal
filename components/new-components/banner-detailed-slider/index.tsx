import React from 'react';
import BannerDetailedItem from '../banner-detailed-item';
import { useWindowDimensions, View } from 'react-native';
import { styles } from './styles';
import DefaultList from '../default-list';
import { BannerDetailed } from '@/models/banner-detailed';

type Props = {
  data: BannerDetailed[];
  horizontal: boolean;
  isVideo?: boolean;
  full?: boolean;
  paginated?: boolean;
  isLoadingNextPage?: boolean;
  onEndReached?: (info?: { distanceFromEnd: number }) => void;
  pagingEnabled?: boolean;
};

const BannerDetailedSlider = function ({ data, horizontal }: Readonly<Props>) {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width * 0.733;

  return (
    <DefaultList
      data={data}
      style={styles.fullWidth}
      pagingEnabled={true}
      renderItem={({ item, index }) => (
        <View
          style={[
            styles.itemWrapperHorizontal,
            {
              width: containerWidth,
              paddingLeft: 2,
            },
          ]}>
          <BannerDetailedItem
            full
            last={index === data.length - 1}
            spacing={2}
            horizontal={horizontal}
            data={item}
          />
        </View>
      )}
    />
  );
};

BannerDetailedSlider.defaultProps = {
  horizontal: true,
  full: false,
};

export default BannerDetailedSlider;
