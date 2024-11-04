import React, { ReactElement } from 'react';
import BannerDetailedItem from '../banner-detailed-item';
import { useWindowDimensions } from 'react-native';
import { styles } from './styles';
import DefaultList from '../default-list';
import { BannerDetailed } from '@/models/banner-detailed';
import BannerDetailedSliderSkeleton from '../banner-detailed-slider-skeleton';
import borders from '@/styles/borders';
import { screens } from '@/styles/screens';

type Props = {
  data: BannerDetailed[];
  horizontal: boolean;
  displaySeller?: boolean;
  HeaderComponent?: React.JSX.Element;
  FooterComponent?: ReactElement;
};

const BannerDetailedSlider = ({
  data,
  horizontal = true,
  displaySeller = true,
  HeaderComponent,
  FooterComponent,
}: Props) => {
  // TODO REFACTOR THIS, SIZES FOR BANNERS SHOULD BE CENTRALIZED
  const dimensions = useWindowDimensions();
  const width = (dimensions.width > screens.lg ? 580 : dimensions.width) * 0.8;
  const imageHeight = width * 0.44;
  const height = imageHeight + (displaySeller ? 160 : 86);

  if (0) {
    return (
      <BannerDetailedSliderSkeleton
        width={width}
        height={height}
        borderRadius={borders.radius.medium}
      />
    );
  }

  const keyExtractor = (item: BannerDetailed): string => `bannerDetailedSlider_${item.id}`;

  return (
    <DefaultList
      horizontal={horizontal}
      data={data}
      style={styles.list}
      pagingEnabled={true}
      renderItem={({ item }) => (
        <BannerDetailedItem
          data={item}
          width={width}
          height={height}
          borderRadius={borders.radius.medium}
          displaySeller={displaySeller}
          imageHeight={imageHeight}
        />
      )}
      keyExtractor={keyExtractor}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
    />
  );
};

export default BannerDetailedSlider;
